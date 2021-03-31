import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import TaskCard from './TaskCard'
import * as actionCreator from '../store/actions/globalActions'
import * as userActionCreator from '../store/actions/userActions'
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";

function UserFeed(props) {
    const [searchInput, setSearchInput] = useState('');

    let taskSearchHandler = () => {
        props.getSearchTasks(searchInput)
    }
    const keyValidation = (e) => {
        if (e.key === "Enter") {
            taskSearchHandler()
        }
    }
    return (
        <div className='userFeedPage__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible' >
                <SideBarRight />
            </div>
            <div className="userFeed__content">
                <FaQuestionCircle className="tutorialIcon tutorialIcon--absolute" onClick={() => {
                    notifications.tips(tutorial.projectSearch)
                }} />

                <div className='userFeed__search '>
                    <div className="userFeed__search__content standardShadowBox">
                        <input className='input--search' onKeyDown={(e) => {
                            keyValidation(e)
                        }} onChange={(e) => {
                            setSearchInput(e.target.value)
                        }} type="text" placeholder="Trazi Projekat" />
                        <button onClick={() => taskSearchHandler()} className='btn--search button'>Traži</button>
                    </div>
                </div>
                {/* <div className='userFeed__breadCramAndAction '>
                    <h3>Projekti</h3>
                </div> */}

                <div className="userFeedTasks__cards">
                    {props.tasks.map(task => {
                        return (
                            <Link
                                key={task.taskId}
                                to={`/task/${task.taskId}`}
                                className="link"
                            ><TaskCard task={task} /></Link>
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
const mapStateToProps = (state) => {
    return {
        tasks: state.globalReducer.tasks,
        authUser: state.userReducer.authUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSearchTasks: (data) => dispatch(actionCreator.getSearchTasks(data)),
        getMyData: (data) => dispatch(userActionCreator.getMyData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserFeed);
