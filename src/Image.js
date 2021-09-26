import React from 'react'
import "./App.css";

const Image = ({item}) => {
    return (
        <div className="result">
            <img className="image" src = {item.thumbnail.thumbnailUrl} />
            <p className="image-name"> {item.text}</p>
        </div>
    )
}

export default Image
