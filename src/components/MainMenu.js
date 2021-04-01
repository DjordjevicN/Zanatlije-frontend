import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
function MainMenu(props) {
    const [openMenu, setOpenMenu] = useState(false);

    let userIsLoggedIn = Object.keys(props.authUser).length !== 0;
    return (
        <div>

            <div>
                {openMenu ? <div className="mobileMenu__wrapper">
                    <div className="mobile__content">
                        <ul>
                            <li onClick={() => {
                                setOpenMenu(false)
                            }}><Link className='link mobileLink' to='/'>Pocetna</Link></li>
                            <li onClick={() => {
                                setOpenMenu(false)
                            }}><Link className='link mobileLink' to='/zanatlije'>Zanatlije</Link></li>
                            {userIsLoggedIn ? <li onClick={() => {
                                setOpenMenu(false)
                            }}><Link className='link mobileLink' to='/userFeed'>Dashboard</Link></li> : <li><Link className='link' to='/login mobileLink'>Uloguj se</Link></li>}

                        </ul>
                    </div>
                </div> : null}
            </div>
            <div className='mainMenu__wrapper'>
                <MdMenu onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false)
                    } else {
                        setOpenMenu(true)
                    }
                }} className='mobileMenuBurger' />
                <div className="logo"><Link className='link' to='/'>
                    <p className='logText'>Занатлије</p>
                </Link></div>
                <ul>
                    <li><Link className='link' to='/'>Pocetna</Link></li>
                    <li><Link className='link' to='/zanatlije'>Zanatlije</Link></li>
                    {userIsLoggedIn ? <li><Link className='link' to='/userFeed'>Dashboard</Link></li> : <li><Link className='link' to='/login'>Uloguj se</Link></li>}

                </ul>

            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser
    }
}
export default connect(mapStateToProps, null)(MainMenu);
