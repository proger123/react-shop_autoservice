import React from 'react'

const CardExampleImageCard = (props) => (
    <div className='card' data-slideout-ignore>
        <div className='card__image' style={{backgroundImage: `url(${props.imageLink})`}} />
        <div className='card__title'>
            {props.title}
        </div>
    </div>
)

export default CardExampleImageCard