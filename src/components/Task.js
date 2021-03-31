import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import ApplyFormModal from './ApplyFormModal'
import { MdLocationCity } from "react-icons/md";
import * as actionCreator from '../store/actions/taskActions'

function Task(props) {
    const [applyFormOpen, setApplyFormOpen] = useState(false);
    let taskId = parseInt(props.match.params.id)
    let singleTask = props.tasks.find(item => item.taskId === taskId)
    let getTaskById = props.getTaskById;
    useEffect(() => {
        return getTaskById(taskId)
    }, [getTaskById, taskId]);
    const openTaskApplyForm = () => {
        setApplyFormOpen(true)
    }
    const closeTaskApplyForm = () => {
        setApplyFormOpen(false)
    }
    return (
        <div>
            {applyFormOpen ? <ApplyFormModal closeModal={closeTaskApplyForm} taskInformation={singleTask} authUser={props.authUser} /> : null}
            {singleTask ? <div className='mainGridLayout mobileGridLayout'>
                <SideBarLeft />
                <div className='mobileMod--visible' >
                    <SideBarRight />
                </div>
                <div className='task__wrapper'>
                    <div className="userFeedTask__wrapper standardShadowBox">
                        <div className="userFeedTask--titleAndFav">
                            <div className="userFeedTask__title"><h3>{singleTask.taskTitle}</h3></div>
                        </div>
                        <div className="userFeedTask--priceAndInfo">
                            <div className="userFeedTask__price"><p>Budžet</p><h4>{singleTask.taskPrice} din</h4></div>
                            <div className="userFeedTask__address"><MdLocationCity /><p>{singleTask.taskAddress}</p></div>
                        </div>
                        <div className="userFeedTask__taskDescription"><p>{singleTask.taskBody}</p></div>
                        <div className="userFeedTask__taskOwner">{singleTask.taskOwnerName}</div>
                        <div className="btn" onClick={() => {
                            openTaskApplyForm()
                        }}><p>Apliciraj</p></div>
                    </div>
                </div>
                <div className='mobileMod--disable'>
                    <SideBarRight />
                </div>
            </div> : null}
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
        getTaskById: (data) => dispatch(actionCreator.getTaskById(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);
