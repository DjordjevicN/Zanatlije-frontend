import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/userActions'


function ChatInputElement(props) {
    const [message, setMessage] = useState({
        messageProposalId: props.chatRoomId,
        messageBody: '',
        messageFromUserId: props.authUserId,
        messageFromName: props.authUserName,
        messageTimestamp: '',
        messageSeen: false
    });
    const msgSendingHandler = () => {
        setMessage({ ...message, messageTimestamp: Date.now() })
        props.sendMessage(message)
    }

    return (
        <div className="chatInputElement__wrapper standardShadowBox">
            <div className="chatInputElement__content">
                <div className="textEditorInput">
                    <CKEditor className="ck-editor__editable" editor={ClassicEditor} onChange={(event, editor) => {
                        const data = editor.getData()
                        setMessage({ ...message, messageBody: data })
                    }} />
                </div>
                <button className="btn--send button" onClick={() => {
                    msgSendingHandler()
                }} >Pošalji</button>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (data) => dispatch(actionCreator.sendMessage(data))
    }
}

export default connect(null, mapDispatchToProps)(ChatInputElement);
