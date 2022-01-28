import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import TaskCard from './TaskCard'
import { CgAdd } from "react-icons/cg";
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";
function UserTasks(props) {

    return (
        <div className='userFeedPage__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible'>
                <SideBarRight />
            </div>
            <div className="userFeed__content">
                <FaQuestionCircle className="tutorialIcon tutorialIcon--absolute" onClick={() => {
                    notifications.tips(tutorial.projectSearch)
                }} />
                <div className="userServices__actions standardShadowBox">
                    <h3 className='userServices__actions__title'>Projekti</h3>
                    <Link to='/addUserTasksForm'><CgAdd className='btn--add' /></Link>
                </div>
                {props.tasks.length > 0 ? <div className="userFeedTasks__cards">
                    {props.tasks.map(task => {
                        return (
                            <Link
                                key={task.taskId}
                                to={`/singleTaskPage/${task.taskId}`}
                                className="link"
                            ><TaskCard task={task} /></Link>
                        )
                    })}
                </div> : <div className='noContent__wrapper'>
                    <p>Trenutno nemate kreiranih projekata</p>
                </div>}

            </div>
            <div className='mobileMod--disable'>
                <SideBarRight />
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.userReducer.userTasks
    }
}
export default connect(mapStateToProps, null)(UserTasks);

