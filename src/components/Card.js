import React from 'react'

const Card = (props) =>{
    let review = props.review;
    
    return (
        <div>
           <div><img src={review.image} width="100px" style={{ borderRadius: '50%' }} /></div>
            <div>
                <p style={{fontWeight:"bold"}}>{review.name}</p>
                <p>{review.job}</p>
            </div>
            <div>
                {review.text}
            </div>
        </div>
    )
}
export default Card