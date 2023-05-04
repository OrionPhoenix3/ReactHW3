import React from "react";

export default class Square extends React.Component{
    squareRef = React.createRef();
    componentDidMount() {
        setTimeout(()=>{
        this.squareRef.current.className = 'square-blue'
        }, 2000)
    }

    render() {
        return <div>
            <div className='square' ref={this.squareRef}>
            
            </div>
        </div>
    }
};