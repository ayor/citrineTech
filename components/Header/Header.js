import React from 'react'
import Nav from '../Nav/Nav';
import HeaderStyles from '../../styles/Header.module.css';

const Header = () => (
    <header className={HeaderStyles.header}>
        <Nav />
        <video autoPlay muted loop className={HeaderStyles.Video}>
            <source src="/vids/video.mp4" type="video/mp4" />
        </video>
        <div className={"text-light text-center text-md-right " + HeaderStyles.banner}>
            <h1 className={"display-4 " + HeaderStyles.bannerHeading}><span className=" font-weight-bold ">Citrine</span><span
                className="display-3 ">Tech</span></h1>
            <p className={"lead text-light " + HeaderStyles.bannerPar}>Proactive IT management, monitoring and support at a fixed
            monthly
            fee</p>
        </div>
    </header>
);

export default Header;