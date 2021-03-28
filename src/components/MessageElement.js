// @@ Message Element || box || component
import React from 'react';
import parse from 'html-react-parser'
import { MdPerson } from "react-icons/md";
import { connect } from 'react-redux'
function MessageElement(props) {
    let message = props.message;
    let timeStamp = parseInt(props.message.messageTimestamp)

    let date = new Date(timeStamp * 1000);
    let hour = date.getHours();
    let min = date.getMinutes();
    let time = `${hour}:${min}`
    return (
        <div className='messageElement__wrapper '>
            {props.authUser.userId === message.messageFromUserId ? <div className="messageElement__content standardShadowBox messageElement__content--me">
                <div className="messageElement__content--user">
                    <MdPerson className='sideBarRight__item--icon' />
                    <div className="messageElement__content--fromName">{message.messageFromName}</div>
                    {time === 'NaN:NaN' ? null : <div className="messageElement__content--msgTimeStamp">{time}</div>}
                </div>

                <div className="messageElement__content--msgBody">{parse(message.messageBody)}</div>

            </div> : <div className="messageElement__content standardShadowBox">
                <div className="messageElement__content--user">
                    <MdPerson className='sideBarRight__item--icon' />
                    <div className="messageElement__content--fromName">{message.messageFromName}</div>
                    {time === 'NaN:NaN' ? null : <div className="messageElement__content--msgTimeStamp">{time}</div>}
                </div>

                <div className="messageElement__content--msgBody">{parse(message.messageBody)}</div>

            </div>}

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser
    }
}
export default connect(mapStateToProps, null)(MessageElement);
