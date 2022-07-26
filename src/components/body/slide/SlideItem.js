import React from 'react'

const SlideItem = ({ image }) => {
    return (
        <div className="slide-item">
            <img src={require(`../../../acsess/img/${image}`)} alt="" />
        </div>
    )
}

export default SlideItem