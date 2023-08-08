import React from 'react'
import './menubar.css'
import DropDown from '../DropDown/DropDown'

const Menubar = () => {
    return (
        <div className='menu-container'>
            <div className='brand-logo'>
                Brand logo
            </div>
            <div className='menuBtn'>
                <button type='button' className='btn'>
                    + &nbsp; Add new task
                </button>
            </div>
            <div>
                <p>MENU</p>
                <div className='date-container'>
                    <span></span>
                    <p>Overview</p>
                </div>
                <div className='date-container'>
                    <input type='date' /> <span> Today</span>
                </div>
                <div className='date-container'>
                    <input type='date' /><span>Schedule</span>
                </div>
            </div>
            <div className='date-container'>
                <span></span>
                <p>Note</p>
            </div>
            <DropDown />
        </div>
    )
}

export default Menubar