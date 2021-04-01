import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { MdLocationCity } from "react-icons/md";
import EditUserTaskModal from './EditUserTaskModal'
import Proposals from './Proposals'
import * as actionCreator from '../store/actions/taskActions'
import * as userActionCreator from '../store/actions/userActions'


// @@ Single task page for USER
function SingleTaskPage(props) {
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [formModal, setFormModal] = useState(false);

    let getProposals = props.getTaskProposals;
    let taskId = parseInt(props.match.params.id)
    let singleTask = props.tasks.find(item => item.taskId === taskId)
    let proposals = props.tasksProposals;
    let authUserId = props.authUser.userId
    useEffect(() => {
        return getProposals(taskId)
    }, [getProposals, taskId]);
    const redirectHandler = () => {
        window.location = '/userTasks'
    }
    const deleteHandler = () => {
        // Validate tasks owner
        if (authUserId === singleTask.taskUserId) {
            props.deleteTask(taskId)
            props.getMyData()
            setOpenConfirmationModal(false)
            redirectHandler()
        }
    }
    const handleFormModal = () => {
        if (formModal) {
            setFormModal(false)
        } else {
            setFormModal(true)
        }
    }
    const confirmationModalHandler = () => {
        if (openConfirmationModal) {
            setOpenConfirmationModal(false)
        } else {
            setOpenConfirmationModal(true)
        }
    }
    return (
        <div>
            {openConfirmationModal ? <div className="confirmationModal__wrapper ">
                <div className="confirmationModal__content standardShadowBox">
                    <div className="confirmationModalTitle">
                        <h3>Obriši projekat ?</h3>
                    </div>
                    <hr />
                    <div className="confirmationModal--actions">
                        <button className='button' onClick={() => {
                            deleteHandler()
                        }}>Obriši</button>
                        <button className='button' onClick={() => {
                            setOpenConfirmationModal(false)
                        }}>Odustani</button>
                    </div>
                </div>
            </div> : null}
            <div>
                {formModal ? <EditUserTaskModal singleTask={singleTask} closeModal={handleFormModal} /> : null}
            </div>
            <div className="mainGridLayout mobileGridLayout">
                <SideBarLeft />
                <div className='mobileMod--visible'>
                    <SideBarRight />
                </div>
                <div className='singleTaskPage__Wrapper '>
                    <div className="singleTaskPage__content standardShadowBox">
                        <div className="singleTaskPage__card">
                            <div className="singleTaskPage__card--titleAndFav">
                                <div className="singleTaskPage__title"><h3>{singleTask.taskTitle}</h3></div>
                            </div>
                            <div className="singleTaskPage--priceAndInfo">
                                <div className="userFeedTask__price"><p>Budžet</p><h4>{singleTask.taskPrice} din</h4></div>
                                <div className="userFeedTask__address"><MdLocationCity /><p>{singleTask.taskAddress}</p></div>
                            </div>
                            <div className="singleTaskPage__taskDescription"><p>{singleTask.taskBody}</p></div>
                            <div className="singleServiceCard__actions">
                                <p onClick={() => {
                                    handleFormModal()
                                }} className='btn--edit'>izmeni</p>
                                <p className='btn--delete' onClick={() => {
                                    confirmationModalHandler()
                                }}>Obriši</p>
                            </div>
                        </div>
                    </div>
                    <div className="taskProposals">
                        {proposals.map((proposal) => {
                            return <Link to={`/chatRoom/${proposal.proposalId}`} key={proposal.proposalId} className='link'><Proposals proposal={proposal} /></Link>
                        })}
                    </div>
                </div>
                <div className='mobileMod--disable'>
                    <SideBarRight />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.userReducer.userTasks,
        tasksProposals: state.userReducer.tasksProposals,
        authUser: state.userReducer.authUser,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTask: (data) => dispatch(actionCreator.deleteTask(data)),
        getMyData: () => dispatch(userActionCreator.getMyData()),
        getTaskProposals: (data) => dispatch(actionCreator.getTaskProposals(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleTaskPage);

