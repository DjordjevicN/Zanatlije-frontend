import React, { useState } from 'react';
import { connect } from 'react-redux'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import EditUserService from './EditUserService'
import * as actionCreator from '../store/actions/serviceActions'
import * as userActionCreator from '../store/actions/userActions'
import parse from 'html-react-parser'
function Service(props) {
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    const serviceId = parseInt(props.match.params.id)
    const service = props.userServices.find(item => item.serviceId === serviceId);
    const deleteHandler = () => {
        // Validate tasks owner
        const redirectHandler = () => {
            window.location = '/userServices'
        }
        if (props.authUser.userId === service.serviceUserId) {
            props.deleteService(serviceId)
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

            {formModal ? <EditUserService service={service} handleFormModal={handleFormModal} /> : null}
            <div className=' mainGridLayout mobileGridLayout'>
                <SideBarLeft />
                <div className='mobileMod--visible' >
                    <SideBarRight />
                </div>
                <div>
                    <div className="service__wrapper standardShadowBox">
                        <div className="service__content ">
                            <div className="singleServiceCard__categoryAndPrice">
                                <h3>{service.serviceCategory}</h3>
                                <h3>{service.servicePrice}</h3>
                            </div>
                            <div className="singleServiceCard__Description">
                                {parse(service.serviceDescription)}
                            </div>
                            <div className="singleServiceCard__actions">
                                <p onClick={() => {
                                    handleFormModal()
                                }} className='btn--edit'>Izmeni</p>
                                <p className='btn--delete' onClick={() => {
                                    confirmationModalHandler()
                                }}>Obriši</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobileMod--disable' >
                    <SideBarRight />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser,
        userServices: state.userReducer.userServices,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteService: (data) => dispatch(actionCreator.deleteService(data)),
        getMyData: (data) => dispatch(userActionCreator.getMyData(data)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);
