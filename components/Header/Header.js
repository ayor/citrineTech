import React from 'react'
import Link from 'next/link';
import HeaderStyles from '../../styles/Header.module.css';

const Header = ({title, bannerMessage, showbtn, btnMessage, btnLink}) => {
    
    const headerTitle = !title ?  "Citrinetech Limited" : title;
    const headerMessage = !bannerMessage ?  `Managed IT services provider with a track record 
    of providing hybrid solutions tailored for mid-market and enterprise companies. ` : bannerMessage;
    
    return(
    <header className={HeaderStyles.header}>
        <div className={"text-dark  " + HeaderStyles.banner}>
            <h1 className={"display-4 " + HeaderStyles.bannerHeading}>{headerTitle}</h1>
            <p className={"lead text-dark " + HeaderStyles.bannerPar}>{headerMessage}</p>

           { showbtn ?  <Link href={btnLink}>
                <a className={"btn btn-warning p-3 "+HeaderStyles.btn}>Contact Us</a>
            </Link>: null }
            
        </div>
    </header>
)};

export default Header;