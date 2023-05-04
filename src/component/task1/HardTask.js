import React from "react";
import Albums from "./Albums";

export default class HardTask extends React.Component {
    state = {
        albums: [],
        count: "",
        load: false,
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            load: true,
            albums: this.props.albums.slice(0, Number(this.state.count))
        });
    };
    
    changeValue = (e) => {
        this.setState({count: e.target.value, load: false});
    }
    
    render() {
        return (
            <div className='container'>
                <div className="head">
                    <form className='form' onSubmit={this.onSubmit}>
                        <input
                                type='number'
                                placeholder='Number'
                                name='number'
                                min='0'
                                max={this.props.albums.length}
                                value={this.state.count}
                                onChange={this.changeValue}
                        />
                        <button type='submit' disabled={!this.state.count} className='submit-btn'>Submit</button>
                    </form>
                </div>
                <div className='scroll'>
                    {this.state.load ? (<Albums albums={this.state.albums}/>):(<></>)}
                </div>
            </div>
        )
    }
}