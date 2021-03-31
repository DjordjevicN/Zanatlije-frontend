import React from 'react';
import { Link } from 'react-router-dom'

function SideBarLeft() {
    return (
        <div className='sideBarLeft__wrapper'>

            <Link to='/userFeed' className='link linkWithIcon sideBarLeft__item button'><p>Traži Projekat</p></Link>

        </div>
    );
}

export default SideBarLeft;
