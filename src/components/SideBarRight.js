import React from 'react';
import { Link } from 'react-router-dom'
import { MdViewList, MdRateReview, MdPerson, MdInbox } from "react-icons/md";
import { connect } from 'react-redux'
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";
import * as serviceActionCreator from '../store/actions/serviceActions'
import * as userActionCreator from '../store/actions/userActions'

function SideBarRight(props) {
    let userId = props.authUser.userId
    return (
        <div className='sideBarRight__wrapper'>
            <FaQuestionCircle className="tutorialIcon tutorialIcon--absolute" onClick={() => {
                notifications.tips(tutorial.rightNavigation)
            }} />
            <div className='sideBarRight__item button'><Link to='/userProfile' className='link linkWithIcon'><MdPerson className='sideBarRight__item--icon' /> <p>{props.authUser.userName}</p></Link>
            </div>
            <div className='sideBarRight__item button' onClick={() => {
                props.getUsersServices(userId)
            }} ><Link to='/userServices' className='link linkWithIcon'><MdViewList className='sideBarRight__item--icon' /> <p>Moje Usluge</p></Link></div>
            <div className='sideBarRight__item button' onClick={() => {
                props.getUsersTaskById()
            }} ><Link to='/userTasks' className='link linkWithIcon'><MdRateReview className='sideBarRight__item--icon' /><p>Projekti</p></Link></div>
            <div className='sideBarRight__item button' ><Link to='/offers' className='link linkWithIcon'><MdInbox className='sideBarRight__item--icon' /><p>Poslate Ponude</p></Link></div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.userReducer.authUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUsersServices: (data) => dispatch(serviceActionCreator.getUsersServices(data)),
        getUsersTaskById: () => dispatch(userActionCreator.getUsersTaskById())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarRight);
