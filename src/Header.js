import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { Avatar } from '@mui/material';
import './Header.css';



function Header() {
  return (
    <div className="header">
        <div className='header__left'>
           <MenuSharpIcon />
           <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyECrSKwkFPn8pn1ELLVV6OSyBmr4i2GacMRhr8KPtiijAU-wRAWLlSNnXb412LQJWgOc&usqp=CAU" alt="youtube-logo"/>


        </div>


        <div className='header__input'>
            
            <input placeholder="Search" type="text"/>
            <SearchSharpIcon className='header__inputSearch'/>
            
        </div>
        <MicSharpIcon className='header__micSharp'/>


        <div className='header__icons'>
          
          <VideoCallSharpIcon className="header__icon"/>
          <AppsSharpIcon className="header__icon"/>
          <NotificationsSharpIcon className="header__icon"/>
          <Avatar 
            alt="Jabed Ahmed"
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="demo-jabed"/>
        



        </div>

        
       
        
        
    </div>
  )
}

export default Header