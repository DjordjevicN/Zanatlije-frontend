import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import SingleServiceCardPreview from './SingleServiceCardPreview'
import * as actionCreator from '../store/actions/globalActions'

function ZanatlijaProfile(props) {
    let getUserAndServices = props.getUserAndServices
    let previewUserId = props.match.params.id;
    useEffect(() => {
        return getUserAndServices(previewUserId)
    }, [getUserAndServices, previewUserId]);
    let user = props.userPreview[0];

    return (
        <div className="zanatlijaProfile__wrapper">
            {/* This needs to be separated component after completing users information  */}
            {props.userPreview.length > 0 && <div className="zanatlijeProfile__content">
                <div className="userProfileInformation__wrapper standardShadowBox">
                    <h3 className="userProfileInformation--name">{user.userName}</h3>
                    <div className="userProfileInformation__content">
                        <div className="userProfileInformation__card">
                            <h4>EMAIL</h4>
                            <p>{user.email}</p>
                        </div>
                        <div className="userProfileInformation__card">
                            <h4>TELEFON</h4>
                            <p>{user.userPhoneNumber}</p>
                        </div>
                        <div className="userProfileInformation__card">
                            <h4>KREDIT</h4>
                            <p>{user.userCredit}</p>
                        </div>
                        <div className="userProfileInformation__card">
                            <h4>STATUS</h4>
                            <p>{user.userStatus}</p>
                        </div>
                        <div className="userProfileInformation__card">
                            <h4>ADRESA</h4>
                            <p>{user.userAddress}</p>
                        </div>
                        <div className="userProfileInformation__card">
                            <h4>TEMA</h4>
                            <p>{user.userTheme}</p>
                        </div>

                    </div>
                    <div className="userProfileInformation__card">
                        <h4>O MENI</h4>
                        <p>{user.aboutMe}</p>
                    </div>
                </div>
                {/* <div className="userProfile__contactAndStats standardShadowBox">
                    <div className="userProfile__contactAndStats--name">
                        <h3>{user.userName}</h3>
                    </div>
                    <div className="userProfile__contactAndStats--email ">
                        <p className="userProfile__contactAndStats--email--icon ">Email</p>
                        <p className="userProfile__contactAndStats--email--text ">{user.email}</p>
                    </div>
                    <div className="userProfile__contactAndStats--phone ">
                        <p className="userProfile__contactAndStats--phone--icon ">Telefon</p>
                        <p className="userProfile__contactAndStats--phone--text ">{user.userPhoneNumber}</p>
                    </div>
                    <div className="userProfile__contactAndStats--credit ">
                        <p className="userProfile__contactAndStats--credit--icon ">Grad</p>
                        <p className="userProfile__contactAndStats--credit--text ">{user.userAddress}</p>
                    </div>
                    <div className="userProfile__contactAndStats--status ">
                        <p className="userProfile__contactAndStats--status--icon ">Status</p>
                        <p className="userProfile__contactAndStats--status--text ">{user.userStatus}</p>
                    </div>
                    <div className="userProfile__contactAndStats--status ">
                        <p className="userProfile__contactAndStats--grade--icon ">Ocena</p>
                        <p className="userProfile__contactAndStats--grade--text ">10</p>
                    </div>
                </div> */}
                <div className="usersServices__wrapper">
                    <div className="usersServices__content">
                        {props.userPreview.map(service => {
                            return (
                                <SingleServiceCardPreview key={service.serviceId} service={service} />
                            )
                        })}
                    </div>
                </div>
            </div>}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userPreview: state.globalReducer.userPreview
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserAndServices: (data) => dispatch(actionCreator.getUserAndServices(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ZanatlijaProfile);
