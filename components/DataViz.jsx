import styles from './DataViz.module.css'

import { useData } from './utils/loadData';
import Globe from "./Globe"

const DataViz = () => {
    //load data 
    const { mapData, data, error } = useData()


    if (mapData && data) {
        return (
            <>
                <h2>World population</h2>

                <div className={styles.App__charts}>
                    <div className={styles.App__map}>
                        <Globe countries={mapData} data={data} />
                    </div>
                </div>
            </>
        )
    }

    else if (error) {
        return (<div id="loading-screen"><p>{error}</p></div>);
    }

    else {
        return (<div id="loading-screen"><p>Loading...</p></div>);
    }
}

export default DataViz