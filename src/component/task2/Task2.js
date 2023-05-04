import React, {useState, useContext} from "react";
import { DataContext } from "../../context/DataContext";
import Albums from "../task1/Albums";

export const Task2 = () => {
    const {albums} = useContext(DataContext);
    const [number, setNumber] = useState('');
    const [render, setRender] = useState([]);

    const update = (number) => {
        let dataRender = [];
        for (let i = 0; i < number; i++) {
            dataRender[i] = albums[i];
        }
        setRender(dataRender);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        update(Number(number));
    };

    const changeValue = (e) => {
        setNumber(e.target.value)
    };

    return (
    <div className='container'>
        <div className="head">
            <form className='form' onSubmit={onSubmit}>
                <input
                    type='number'
                    placeholder='Number'
                    name='number'
                    min='0'
                    max={albums.length}
                    value={number}
                    onChange={changeValue}
                />
                <button type='submit' disabled={!number} className='submit-btn'>Submit</button>
            </form>
        </div>
        <div className='scroll'>
            <Albums albums={render} />
        </div>
    </div>)
};

export default Task2
