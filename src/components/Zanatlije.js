import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ZanatlijeCard from './ZanatlijeCard'
import * as actionCreator from '../store/actions/globalActions'
import * as notifications from '../globalConfigurations/Notifications'
import { tutorial } from '../globalConfigurations/Tutorial'
import { FaQuestionCircle } from "react-icons/fa";

function Zanatlije(props) {
    const [searchInput, setSearchInput] = useState('');
    let initPull = props.getInitialProfiles;
    useEffect(() => {
        return initPull()
    }, [initPull]);
    let taskSearchHandler = () => {
        props.getSearchUsers(searchInput)
    }
    const keyValidation = (e) => {
        if (e.key === "Enter") {
            taskSearchHandler()
        }
    }
    return (
        <div className="zalatlijePage__wrapper">
            <div className="zanatlijePage__content">
                {/* Serach  */}
                <FaQuestionCircle className="tutorialIcon tutorialIcon--absolute" onClick={() => {
                    notifications.tips(tutorial.userSearch)
                }} />
                <div className='userFeed__search standardShadowBox'>
                    <div className="userFeed__search__content">
                        <input className='input--search ' type="text" placeholder="Pronadji zanatliju" onChange={(e) => {
                            setSearchInput(e.target.value)

                        }} onKeyDown={(e) => {
                            keyValidation(e)
                        }} />
                        <button onClick={() => taskSearchHandler()} className='btn--search button'>Traži</button>
                    </div>
                </div>
                <div>
                    {props.users.map(user => {
                        return (
                            <Link
                                key={user.serviceId}
                                to={`/zanatlijaProfilePreview/${user.userId}`}
                                className="link"
                            ><ZanatlijeCard user={user} /></Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.globalReducer.users
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInitialProfiles: () => dispatch(actionCreator.getInitialProfiles()),
        getSearchUsers: (data) => dispatch(actionCreator.getSearchUsers(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Zanatlije);

