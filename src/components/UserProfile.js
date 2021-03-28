import React, { useState } from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { connect } from 'react-redux'
import EditUserFormModal from './EditUserFormModal'
import UserDashboardView from './UserDashboardView'
import * as actionCreator from '../store/actions/userActions'
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";

function UserProfile(props) {
    const [openEditUserForm, setOpenEditUserForm] = useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const { userTheme, userName, email, userPhoneNumber, userStatus, userCredit, aboutMe, userAddress } = props.authUser;

    const signOutUser = () => {
        props.logout()
        setOpenConfirmationModal(false)
        window.location = '/'
    }
    const confirmationModalHandler = () => {
        if (openConfirmationModal) {
            setOpenConfirmationModal(false)
        } else {
            setOpenConfirmationModal(true)
        }
    }
    const userModalFormHandler = () => {
        setOpenEditUserForm(true)
        if (openEditUserForm) {
            setOpenEditUserForm(false)
        } else {
            setOpenEditUserForm(true)
        }
    }

    return (
        <div>
            {openEditUserForm ? <EditUserFormModal userInfo={props.authUser} closeModal={userModalFormHandler} /> : null}
            {openConfirmationModal ? <div className="confirmationModal__wrapper ">
                <div className="confirmationModal__content standardShadowBox">
                    <div className="confirmationModalTitle">
                        <h3>Da li zelite da se izlogujete ?</h3>
                    </div>
                    <hr />
                    <div className="confirmationModal--actions">
                        <button className='button' onClick={() => {
                            signOutUser()
                        }}>Izloguj se</button>
                        <button className='button' onClick={() => {
                            setOpenConfirmationModal(false)
                        }}>Odustani</button>
                    </div>
                </div>
            </div> : null}


            <div className='mainGridLayout'>
                <SideBarLeft />
                <div className='task__wrapper'>

                    <div className="UserProfile__wrapper standardShadowBox">
                        <div className="userProfile__beadCram">
                            <h3>Korisnicke informacije</h3>
                            <hr />
                        </div>
                        <div className="userProfile__nameAndActions">
                            <h3 className="userProfile__nameAndActions--name">{userName}</h3>
                            <div className="userProfile__actions">
                                <div className="userProfile__actions--edit">
                                    <p onClick={() => {
                                        userModalFormHandler()
                                    }}>Edit</p>
                                </div>
                                <p onClick={() => {
                                    confirmationModalHandler()
                                }} >Sign out</p>
                            </div>

                        </div>
                        <div className="userProfile__contactAndStats">
                            <div className="userProfile__contactAndStats--email ">
                                <p className="userProfile__contactAndStats--email--icon ">Email</p>
                                <p className="userProfile__contactAndStats--email--text ">{email}</p>
                            </div>
                            <div className="userProfile__contactAndStats--phone ">
                                <p className="userProfile__contactAndStats--phone--icon ">Telefon</p>
                                <p className="userProfile__contactAndStats--phone--text ">{userPhoneNumber}</p>
                            </div>
                            <div className="userProfile__contactAndStats--status ">
                                <p className="userProfile__contactAndStats--status--icon ">Adresa</p>
                                <p className="userProfile__contactAndStats--status--text ">{userAddress}</p>
                            </div>

                            <div className="userProfile__contactAndStats--credit ">
                                <p className="userProfile__contactAndStats--credit--icon ">Kredit</p>
                                <p className="userProfile__contactAndStats--credit--text ">{userCredit}</p>
                                <FaQuestionCircle className="tutorialIcon " onClick={() => {
                                    notifications.tips(tutorial.projectSearch)
                                }} />

                            </div>
                            <div className="userProfile__contactAndStats--credit ">
                                <p className="userProfile__contactAndStats--credit--icon ">Status</p>
                                <p className="userProfile__contactAndStats--credit--text ">{userStatus}</p>
                                <FaQuestionCircle className="tutorialIcon" onClick={() => {
                                    notifications.tips(tutorial.projectSearch)
                                }} />
                            </div>
                            <div className="userProfile__contactAndStats--status ">
                                <p className="userProfile__contactAndStats--status--icon ">Tema</p>
                                <p className="userProfile__contactAndStats--status--text ">{userTheme}</p>
                            </div>
                            <div className="userProfile__contactAndStats--aboutMe ">
                                <p className="userProfile__contactAndStats--aboutMe--title">
                                    O meni
                            </p>
                                <div className="userProfile__contactAndStats--aboutMe--body">
                                    <p>{aboutMe}</p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <UserDashboardView />
                </div>
                <SideBarRight />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    return {
        authUser: state.userReducer.authUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actionCreator.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);




