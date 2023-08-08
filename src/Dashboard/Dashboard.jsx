import React from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMoon, faUser } from "@fortawesome/free-solid-svg-icons";



const Dashboard = () => {
    return (
        <div className='d-container'>
            <div className='bar'>
                <menubar />
            </div>
            <div className='taskbar'>
                    <div>
                        <h1>Good evening Jack</h1>
                    </div>
                    <div>
                        <div className='search'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input placeholder='search' type='text' />
                        </div>
                    </div>
                    <div>
                        <div className='icons'><FontAwesomeIcon icon={faBell} />
                            <FontAwesomeIcon icon={faMoon} />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                


            </div>
        </div>



    )
}

export default Dashboard