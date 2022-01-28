import React from 'react';
import parse from 'html-react-parser'
function ZanatlijeCard({ user }) {
    return (
        <div className="zanatlijeCard__wrapper ">
            <div className="zanatlijeCard__content standardShadowBox">
                <div className="zanatlijeCard__content--userName">
                    <h3>{user.userName}</h3>
                </div>
                <div className="zanatlijeCard__content--serviceDescription">
                    {parse(user.serviceDescription.substring(0, 300))}
                </div>
                <div className="zanatlijeCard__content--serviceCategory">
                    <p>{user.serviceCategory}</p>
                </div>
                <div className="zanatlijeCard__content--servicePrice">
                    <p>{`Cena: ${user.servicePrice} din`}</p>
                </div>
            </div>
        </div>
    );
}

export default ZanatlijeCard;
