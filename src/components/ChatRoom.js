import React, { useEffect } from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import MessagesElement from './MessageElement'
import ChatInputElement from './ChatInputElement'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/userActions'


function ChatRoom(props) {
    let chatRoomId = props.match.params.id;
    let authUserId = props.authUser.userId;
    let authUserName = props.authUser.userName;
    let getMessages = props.getProposalsMessages

    useEffect(() => {
        getMessages(chatRoomId)
        return
    }, [chatRoomId, getMessages]);
    return (
        <div className='chat__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible' >
                <SideBarRight />
            </div>
            <div className="chat__content ">
                <div className="chat__messages">
                    {props.messages.map(message => {
                        return <MessagesElement key={message.messageId} message={message}
                        />
                    })}
                </div>
                <div>
                    <ChatInputElement chatRoomId={chatRoomId} authUserId={authUserId} authUserName={authUserName} />
                </div>
            </div>
            <div className='mobileMod--disable'>
                <SideBarRight />
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.userReducer.authUser,
        messages: state.userReducer.userMessages
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProposalsMessages: (data) => dispatch(actionCreator.getProposalsMessages(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
