import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Square from "./component/task3/Square";
import VideoPlayer from "./component/task3/VideoPlayer";
import {DataProvider} from "./context/DataContext";
import Task1 from "./component/task1/Task1";
import App from "./component/task1/App";
import Task2 from "./component/task2/Task2";

ReactDOM.render(
    <React.StrictMode>
        <section className='section-square'>
            <h2>Square from Task №3</h2>
            <Square/>
        </section>
        <DataProvider>
            <section className='section-task1'>
                <h2>Task №1</h2>
                <Task1/>
                <h2>Задание со звездочкой</h2>
                <App/>
            </section>
            <section className='section-task2'>
                <h2>Task №2</h2>    
                <Task2/>
            </section>    
        </DataProvider>
        <section className='section-video'>
            <h2>Video</h2>
            <VideoPlayer/>
        </section>
    </React.StrictMode>,
    document.getElementById('root')
);

