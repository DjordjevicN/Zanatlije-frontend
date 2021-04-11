import React from 'react';
import parse from 'html-react-parser'
function SingleServiceCard(props) {
    let service = props.service;
    return (
        <div className='singleServiceCard__wrapper standardShadowBox'>
            <div className="singleServiceCard__content ">
                <div className="singleServiceCard__categoryAndPrice">
                    <h3>{service.serviceCategory}</h3>
                    <h3>{`${service.servicePrice} din`}</h3>

                </div>
                <div className="singleServiceCard__Description">
                    {parse(service.serviceDescription.substring(0, 200))}
                </div>
            </div>
        </div>
    );
}

export default SingleServiceCard;
