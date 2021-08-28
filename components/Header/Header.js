import React from 'react'
import Btn from '../Button/Button';; 
import HeaderStyles from '../../styles/Header.module.css';

const Header = ({title, bannerMessage, showbtn}) => {
    
    const headerTitle = !title ?  "Citrinetech Limited" : title;
    const headerMessage = !bannerMessage ?  `Managed IT services provider with a track record 
    of providing hybrid solutions tailored for mid-market and enterprise companies. ` : bannerMessage;
    if(showbtn != false){
        showbtn = true;
        
    }

    return(
    <header className={`vh-100 ${HeaderStyles.header}`}>
        <div className={"text-dark  " + HeaderStyles.banner}>
            <h1 className={"display-4 " + HeaderStyles.bannerHeading}>{headerTitle}</h1>
            <p className={"lead text-dark " + HeaderStyles.bannerPar}>{headerMessage}</p>
 
           { showbtn ?  <Btn btnHref={"#products"} title={"Contact Us"} />: null }
            
        </div>
    </header>
)};

export default Header;