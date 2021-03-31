import React from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import SingleServiceCard from './SingleServiceCard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CgAdd } from "react-icons/cg";

function UserServices(props) {
    let userServices = props.userServices;
    return (
        <div className='userServices__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible'>
                <SideBarRight />
            </div>
            <div className="userServices__content">
                <div className="userServices__actions standardShadowBox">
                    <h3 className='userServices__actions__title'>Moje usluge</h3>
                    <Link to='/addUserServiceForm'><CgAdd className='btn--add' /></Link>
                </div>
                {userServices.length > 0 ? <div className="userServices__cards">
                    {userServices.map(service => {
                        return (
                            <Link
                                key={service.serviceId}
                                to={`/service/${service.serviceId}`}
                                className="link"
                            ><SingleServiceCard service={service} /></Link>
                        )
                    })}
                </div> : <div className='noContent__wrapper'>
                    <div className="noContent__content">
                        <p>Trenutno nemate kreiranih usluga kliknite na <CgAdd className='btn--add' /> da dodate prvu uslugu </p>
                    </div>
                </div>}
            </div>
            <div className='mobileMod--disable'>
                <SideBarRight />
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        userServices: state.userReducer.userServices
    }
}

export default connect(mapStateToProps, null)(UserServices);
