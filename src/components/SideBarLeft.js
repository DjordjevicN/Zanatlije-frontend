import React from 'react';
import { Link } from 'react-router-dom'

function SideBarLeft() {
    return (
        <div className='sideBarLeft__wrapper'>
            <div><Link to='/userFeed' className='sideBarLeft__item link'>Feed</Link></div>
            {/* <div><Link to='/mapFeed' className='sideBarLeft__item link' >Map</Link></div> */}
        </div>
    );
}

export default SideBarLeft;
