import React from "react";
import Albums from "./Albums";
import {DataContext} from "../../context/DataContext";
import AlbumsWithContext from "./AlbumsWithContext";

export default class Task1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            albums: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                let data = [];

                res.map((res) => {
                    return data[data.length] = res
                });

                this.setState({albums: data});
            })
    }

    render() {
        return <div>
            <DataContext.Consumer>
                    {({albums}) => {
                        return (<>
                        <Albums albums={albums}/>
                        </>)
                    }}
            </DataContext.Consumer>
            <AlbumsWithContext />
        </div>
    }
}