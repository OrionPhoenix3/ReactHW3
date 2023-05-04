import React from "react";
import { DataContext } from "../../context/DataContext";
import HardTask from "./HardTask";

export default class App extends React.Component {
    render() {
        return ( 
                <DataContext.Consumer>
                    {({albums}) => {
                        return <HardTask albums={albums}/>
                }
            }  
                </DataContext.Consumer>
        )
    }
}