import React from 'react';
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import SingleServiceCard from './SingleServiceCard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CgAdd } from "react-icons/cg";

function UserServices(props) {
    return (
        <div className='userServices__Wrapper mainGridLayout'>
            <SideBarLeft />
            <div className="userServices__content">
                <div className="userServices__actions standardShadowBox">
                    <h3 className='userServices__actions__title'>Moje usluge</h3>
                    <Link to='/addUserServiceForm'><CgAdd className='btn--add' /></Link>
                </div>
                <div className="userServices__cards">
                    {props.userServices.map(service => {
                        return (
                            <Link
                                key={service.serviceId}
                                to={`/service/${service.serviceId}`}
                                className="link"
                            ><SingleServiceCard service={service} /></Link>
                        )
                    })}
                </div>
            </div>
            <SideBarRight />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userServices: state.userReducer.userServices
    }
}
export default connect(mapStateToProps, null)(UserServices);
