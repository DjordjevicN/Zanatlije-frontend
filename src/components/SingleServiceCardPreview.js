import React from 'react';

function SingleServiceCardPreview({ service }) {
    return (
        <div className='singleServiceCard__wrapper standardShadowBox'>
            <div className="singleServiceCard__content ">
                <div className="singleServiceCard__categoryAndPrice">
                    <h3>{service.serviceCategory}</h3>
                    <h3>{`${service.servicePrice} din`}</h3>
                </div>
                <div className="singleServiceCard__Description">
                    <p>{service.serviceDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleServiceCardPreview;
