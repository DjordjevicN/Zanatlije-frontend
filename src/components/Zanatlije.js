import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ZanatlijeCard from './ZanatlijeCard'
import * as actionCreator from '../store/actions/globalActions'

function Zanatlije(props) {

    const [searchInput, setSearchInput] = useState('');

    let initPull = props.getInitialProfiles;
    useEffect(() => {
        return initPull()
    }, [initPull]);

    let taskSearchHandler = () => {
        console.log(searchInput);
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
                <div className='userFeed__search standardShadowBox'>
                    <div className="userFeed__search__content">
                        <input className='input--search' type="text" placeholder="Pronadji zanatliju" onChange={(e) => {
                            setSearchInput(e.target.value)

                        }} onKeyDown={(e) => {
                            keyValidation(e)
                        }} />
                        <button onClick={() => taskSearchHandler()} className='btn--search'>Traži</button>
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

