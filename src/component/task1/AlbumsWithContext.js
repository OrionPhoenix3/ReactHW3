import React, { useState } from "react";
import Album from "./Album";
import { DataContext } from "../../context/DataContext";

const AlbumsWithContext = () => {
    const [isHidden, setHidden] = useState(true);

    const handleToggle = () => {
        setHidden(!isHidden);
    };

    return (
        <DataContext.Consumer>
        {({albums}) => {
            return (
            <div className="albums-container">
                <h2>Albums with Context</h2>
                <button className='toggle-btn' onClick={handleToggle}>Toggle Albums</button>
                <div className={isHidden ? "albums-hidden" : "albums-active"}>
                    {albums.map((album, index) =>
                        <Album key={album.id} album={album} index={index}/>
                    )}
                </div>
            </div>
            )}
        }  
        </DataContext.Consumer>
    )
};

export default AlbumsWithContext