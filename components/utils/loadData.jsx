import { useState, useEffect } from 'react';
import { feature } from 'topojson-client';

const worldUrl = 'https://unpkg.com/visionscarto-world-atlas@0.1.0/world/110m.json';
const populationApi = 'https://restcountries.com/v3.1/all?fields=name,population,cca3';

export const useData = () => {
  const [data, setData] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);   

  useEffect(() => {
    fetch(populationApi)
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }, []); 


  useEffect(() => {
    fetch(worldUrl)
      .then((response) => response.json())
      .then((topology) => {

            const { countries } = topology.objects;

            setMapData(feature(topology, countries));
      })
      .catch(setError);
  }, []);

  useEffect(() => {
    window.addEventListener("themeChange", () => {
        console.log("theme changed!")
    })
  })


  return {
    mapData: mapData,
    data: data,
    error: error,
  };
};

