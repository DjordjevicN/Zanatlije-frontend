import React, { useEffect } from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/userActions'
import { Link } from 'react-router-dom'
import InboxElement from './InboxElement'
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";


function Inbox(props) {
    let userId = props.authUser.userId;
    let getProposals = props.getUserProposalsById
    useEffect(() => {
        getProposals(userId)
        return
    }, [userId, getProposals]);
    return (
        <div className='userServices__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible' >
                <SideBarRight />
            </div>
            <div className="userServices__content">
                <FaQuestionCircle className="tutorialIcon tutorialIcon--absolute" onClick={() => {
                    notifications.tips(tutorial.projectProposals)
                }} />
                {props.inbox.length > 0 ? <div className="userFeedTasks__cards">
                    {props.inbox.map(task => {
                        return (
                            <Link
                                key={task.proposalId}
                                to={`/chatRoom/${task.proposalId}`}
                                className="link"
                            ><InboxElement task={task} /></Link>
                        )
                    })}
                </div> : <div className='noContent__wrapper'>
                    <div className="noContent__content">
                        <p>Jos niste aplicirali</p>
                    </div>
                </div>}
                <div className="userFeedTasks__cards">
                    {props.inbox.map(task => {
                        return (
                            <Link
                                key={task.proposalId}
                                to={`/chatRoom/${task.proposalId}`}
                                className="link"
                            ><InboxElement task={task} /></Link>
                        )
                    })}
                </div>
            </div>
            <div className='mobileMod--disable'>
                <SideBarRight />
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserProposalsById: (data) => dispatch(actionCreator.getUserProposalsById(data))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.userReducer.authUser,
        inbox: state.userReducer.inbox,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
