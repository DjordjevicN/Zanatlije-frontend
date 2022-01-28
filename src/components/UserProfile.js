import React, { useState } from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { connect } from 'react-redux'
import EditUserFormModal from './EditUserFormModal'
import UserDashboardView from './UserDashboardView'
import * as actionCreator from '../store/actions/userActions'
// import * as notifications from '../globalConfigurations/Notifications'
// import { tutorial } from '../globalConfigurations/Tutorial'
// import { FaQuestionCircle } from "react-icons/fa";

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
                        <h3>Da li želite da se izlogujete ?</h3>
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


            <div className='mainGridLayout mobileGridLayout'>
                <SideBarLeft />
                <div className='mobileMod--visible' >
                    <SideBarRight />
                </div>
                <div className='task__wrapper'>

                    <div className="UserProfile__wrapper standardShadowBox">
                        <div className="userProfile__beadCram">
                            <h3>Korisničke informacije</h3>
                            <hr />
                        </div>
                        <div className="userProfile__nameAndActions">
                            <h3 className="userProfile__nameAndActions--name">{userName}</h3>
                            <div className="userProfile__actions">
                                <div className="userProfile__actions--edit">
                                    <p onClick={() => {
                                        userModalFormHandler()
                                    }}>izmeni</p>
                                </div>
                                <p onClick={() => {
                                    confirmationModalHandler()
                                }} >Izloguj se</p>
                            </div>

                        </div>
                        <div className="userProfileInformation__wrapper">
                            <div className="userProfileInformation__content">
                                <div className="userProfileInformation__card">
                                    <h4>EMAIL</h4>
                                    <p>{email}</p>
                                </div>
                                <div className="userProfileInformation__card">
                                    <h4>TELEFON</h4>
                                    <p>{userPhoneNumber}</p>
                                </div>
                                <div className="userProfileInformation__card">
                                    <h4>KREDIT</h4>
                                    <p>{userCredit}</p>
                                </div>
                                <div className="userProfileInformation__card">
                                    <h4>STATUS</h4>
                                    <p>{userStatus}</p>
                                </div>
                                <div className="userProfileInformation__card">
                                    <h4>ADRESA</h4>
                                    <p>{userAddress}</p>
                                </div>
                                <div className="userProfileInformation__card">
                                    <h4>TEMA</h4>
                                    <p>{userTheme}</p>
                                </div>

                            </div>
                            <div className="userProfileInformation__card">
                                <h4>O MENI</h4>
                                <p>{aboutMe}</p>
                            </div>
                        </div>

                    </div>
                    <UserDashboardView />
                </div>
                <div className='mobileMod--disable'>
                    <SideBarRight />
                </div>
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




