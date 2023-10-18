import { geoNaturalEarth1, geoPath, geoGraticule, scaleSequential, extent, interpolateYlGnBu } from "d3"
import styles from './Globe.module.css'

import { useChartDimensions } from "./utils/utils";

import { useThemeUI } from 'theme-ui'

import { useState, useEffect } from "react";


const Globe = ({ countries, data }) => {

    //set styles based on the current theme ui
    const getTheme = useThemeUI();

    const [themeColor, setThemeColor] = useState(getTheme.colorMode === 'dark' ? 'white' : 'black')
    const [globeColor, setGlobeColor] = useState(getTheme.colorMode === 'dark' ? '#1b1e23' : 'white')
    const [gridColor, setGridColor] = useState(getTheme.colorMode === 'dark' ? 'black' : '#dadada')

    useEffect(() => {
      const themeColor = getTheme.colorMode === 'dark' ? 'white' : 'black';
      const globeColor = getTheme.colorMode === 'dark' ? '#1b1e23' : 'white';
      const gridColor = getTheme.colorMode === 'dark' ? 'black' : '#dadada'; 

      setThemeColor(themeColor);
      setGlobeColor(globeColor);
      setGridColor(gridColor);

    }, [getTheme])

    //we <3 responsive chart
    const [ref, dms] = useChartDimensions({})
  
    //fixing A3 codes for countries that don't have matches
    const matchCountries = {
      "Kosovo": "UNK",
      "Palestine": "PSE",
      "N. Cyprus": "TUR",
      "Somaliland": "SOM"
    }
  
    //map settings
    const sphere = { type: "Sphere" }
    const projection = geoNaturalEarth1().fitWidth(dms.width, sphere);
    const path = geoPath(projection);
    const graticule = geoGraticule();
    const showGraticules = true;
  
    // fit svg to height of map
    const [
      [x0, y0],
      [x1, y1]
    ] = path.bounds(sphere)
    const paddingBottom = 25
    const height = y1 + paddingBottom
  
    //setting color scales
    const target = data.map(d => [ d.cca3, d.population ])
    const valuemap = new Map(target)
    const color = scaleSequential(extent(valuemap.values()), interpolateYlGnBu);
  
    //for legend
    const mapValues = [...Array(100).keys()]
    const colorScale = scaleSequential()
      .domain([0, 99])
      .interpolator(interpolateYlGnBu)
    
    return (
        <div ref={ref} style={{ width: "100%" }}>
          <svg width={dms.width} height={height} role="figure" tabIndex={0}> 
              
              {/* Accessibility */}
              <title>
                <text>
                  Map looking at population of people per country, from 0 to 1.402 billion
                </text>
              </title>
    
              {/* define clip path, legend */}
              <defs>
                <clipPath id="sphere">
                  <path className={styles.sphere} d={path(sphere)} />
                </clipPath>
    
                <linearGradient id="colorScale">
                  {mapValues.map((color, i) => (
                      <stop
                        key={i}
                        offset={`${i * 100 / (mapValues.length)}%`}
                        stopColor={colorScale(i)}
                      />
                    ))}
                </linearGradient>
    
              </defs>
    
              <g className={styles.marks} style={{ clipPath: "url(#sphere)" }} transform={`translate(0, ${paddingBottom})`}>
                <path fill={globeColor} className={styles.sphere} d={path(sphere)} />
                  { showGraticules && 
                     <path stroke={gridColor} className={styles.graticules} d={path(graticule())} />
                  }
    
                  <g className="countries-group" tabIndex={0} role="list" aria-label="countries">
                    {/* fill in path based on population */}
                    {countries.features.map((feature, i) => {
    
                      const featureColor = color(valuemap.get(feature.properties.a3)) || color(valuemap.get(matchCountries[feature.properties.name]))
                      return <path 
                                  key={i} 
                                  className="land" 
                                  d={path(feature)} 
                                  fill={featureColor} 
                                  stroke="black" 
                                  strokeWidth="0.5" 
                                  tabIndex={0} 
                                  role="listitem"
                                  aria-label={`${feature.properties.name.common} has ${feature.properties.population} people`} 
                              />
                    })}
                  </g> 
              </g>
      
    
              <g className="legend" transform={`translate(10, 0)`} role="presentation" aria-hidden="true">
                  <text className={styles.legendtext} fill={themeColor} transform="translate(-10, 10)">0</text>  
                  <rect height="10px" width="240px" style={{fill:  "url(#colorScale)"}}></rect>
                  <text className={styles.legendtext} fill={themeColor}  transform="translate(245, 10)">1.402 billion</text>
              </g>
    
    
    
          </svg>
        </div>
    );
  }
  export default Globe