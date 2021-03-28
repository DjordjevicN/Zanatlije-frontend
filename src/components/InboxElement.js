import React from 'react';
import { MdLocationCity } from "react-icons/md";

function InboxElement(props) {
    let taskProposal = props.task
    console.log(taskProposal);
    return (
        <div className='inboxElement__wrapper'>
            <div className="inboxElement__content standardShadowBox">
                <div className="inboxElement__taskName">
                    <h3>{taskProposal.taskTitle}</h3>
                </div>
                <div className="inboxElement__basicInfo">
                    <div className="inboxElement__basicInfo--price">
                        <p>Budzet</p>
                        <h4>{taskProposal.taskPrice} din</h4>
                    </div>
                    <div className="inboxElement__basicInfo--address"><MdLocationCity />
                        <p>{taskProposal.taskAddress}</p></div>
                </div>
                <div className="inboxElement__description">
                    <p>{taskProposal.taskBody}</p>
                </div>
                <hr />
                <div className="inboxElement__name">
                    <h4>{taskProposal.proposalFromName}</h4>
                </div>
                <div className="inboxElement__offerPrice">
                    <p>Ponudjeno</p>
                    <p>{taskProposal.proposalPrice}</p>
                </div>
                <div className="inboxElement__proposalText">
                    <p>{taskProposal.proposalInitMessage}</p>
                </div>

            </div>



        </div >
    );
}

export default InboxElement;
