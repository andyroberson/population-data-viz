import { useData } from './utils/loadData';

const DataViz = () => {
    //load data 
    const { mapData, data, error } = useData()

    return (
        <>
            <h2>World population</h2>

            <div className="App__charts">
                <div className="App__map">there will be a map here</div>
            </div>
        </>
    )
}

export default DataViz