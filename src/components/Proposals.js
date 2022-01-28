import React from "react";
// import { BsPeopleCircle } from "react-icons/bs";
// @@ proposal card component part of inbox (singleTaskPage)
function Proposals({ proposal }) {
  return (
    <div className="proposals__wrapper standardShadowBox">
      <div className="proposals__content">
        <div className="proposal__msg--sender">
          {/* <BsPeopleCircle className='proposal__msg--icon' /> */}
          <h3>{proposal.proposalFromName}</h3>
        </div>
        <div className="proposal__msg--body">
          <p>{proposal.proposalInitMessage}</p>
        </div>
        <div className="proposal__msg--priceOffer">
          <p>{`Ponudjena cena: ${proposal.proposalPrice}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Proposals;
