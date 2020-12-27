import React from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='Header'>
            <img 
                className='header__icon'
                src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                alt=''
            />

            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header
