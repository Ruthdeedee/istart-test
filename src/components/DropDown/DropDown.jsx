import React from 'react';
import './dropDown.css'

const DropDown = () => {
    return (

        <div className='dropdown-btn'>
            <div>
                <div class="dropdown">
                    <button class="dropbtn">Projects</button>
                    <div class="dropdown-content" >
                        <a href="#">Project 1</a>
                        <a href="#">Project 2</a>
                        <a href="#">Project 3</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="dropdown" >
                    <button class="dropbtn">Team</button>
                    <div class="dropdown-content" >
                        <a href="#">Team 1</a>
                        <a href="#">Team 2</a>
                        <a href="#">Team 3</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DropDown