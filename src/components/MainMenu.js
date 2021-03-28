import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function MainMenu(props) {
    let userIsLoggedIn = Object.keys(props.authUser).length !== 0;
    return (
        <div className='mainMenu__wrapper'>
            <div className="logo"><Link className='link' to='/'>
                <p className='logText'>Занатлије</p>
            </Link></div>
            <ul>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link className='link' to='/zanatlije'>Zanatlije</Link></li>
                {userIsLoggedIn ? <li><Link className='link' to='/userFeed'>Dashboard</Link></li> : <li><Link className='link' to='/login'>Uloguj se</Link></li>}

            </ul>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser
    }
}
export default connect(mapStateToProps, null)(MainMenu);
