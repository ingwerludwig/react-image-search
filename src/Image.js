import React from 'react'

const Image = ({item}) => {
    return (
        <div>
            <img src = {item.thumbnail.thumbnailUrl} />
            <p> {item.text}</p>
        </div>
    )
}

export default Image
