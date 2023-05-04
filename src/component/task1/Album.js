import React from "react";

const Album = ({album, index}) => {
    return (
        <div className='text-area'>
            <b>Id:</b> {album.id} - <b>Index:</b> {index} - <b>Title:</b> {album.title}
        </div>
    )
};

export default Album