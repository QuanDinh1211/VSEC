import React from 'react'

const SlideItem = ({ image, message }) => {
    return (
        <div className="slide-item">
            <img src={require(`../../../acsess/img/${image}`)} alt="" />
            {message && <span>{message}</span>}
        </div>
    )
}

export default SlideItem