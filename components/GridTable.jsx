import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import styles from "./Grid.module.css"



const GridTable = ({data}) => {

    data.sort((a, b) => b.population - a.population)


    return (
        <div className={styles.table__container}>
            <Grid
                data={data}
                columns={[
                    {   
                        name: "Name", 
                        id: "name", 
                        formatter: (cell) => {
                            return cell.common
                        },
                        sort: {
                            compare: (a, b) => {
                                if (a.common < b.common) {
                                    return -1;
                                  }
                                  if (a.common > b.common) {
                                    return 1;
                                  }
                                  return 0;
                            }
                        } 
                    },
                    {   
                        name: "Population", 
                        id: "population",
                        formatter: (cell) => {
                           return cell.toLocaleString() 
                        },
                    }
                ]}
                sort={true}
                search={false}
                pagination={{
                    limit: 10,
                }}/>                    
        
        </div>
    )
} 

export default GridTable