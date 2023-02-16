import React from 'react'
import {MdOutlineDarkMode} from 'react-icons/md'
import './index.css'
import { useState } from 'react'

function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false)

    if(isDarkMode){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }

    const onClickMode=()=>{
        setIsDarkMode(!isDarkMode)
    }

    return(
    <div className='main-container'>
        <div className='mid-contianer'>
            <img src='https://www.pngfind.com/pngs/m/413-4131748_netflix-logo-transparent-png-ant-man-movie-logo.png'
             className='image-loago'
            />
        <button type='submit' className='icon-button' onClick={onClickMode}>
        <MdOutlineDarkMode size={30}/></button>
        </div>
    </div>
    )
}
    

export default Header