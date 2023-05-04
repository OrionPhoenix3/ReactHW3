import React, {useState} from "react";
import Album from "./Album";

const Albums = ({albums}) => {
    const [isHidden, setHidden] = useState(true);

    const handleToggle = () => {
        setHidden(!isHidden);
    };

    return (
        <div className="albums-container">
            <button className='toggle-btn' onClick={handleToggle}>Toggle Albums</button>
            <div className={isHidden ? "albums-hidden" : "albums-active"}>
                {albums.map((album, index) =>
                    <Album key={album.id} album={album} index={index}/>
                )}
            </div>
        </div>
    )
};

export default Albums