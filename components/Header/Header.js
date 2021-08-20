import React from 'react'
import Link from 'next/link';
import HeaderStyles from '../../styles/Header.module.css';

const Header = () => (
    <header className={HeaderStyles.header}>

        {/* <video autoPlay muted loop className={HeaderStyles.Video}>
            <source src="/vids/black_ink.mp4" type="video/mp4" />
        </video> */}
        <div className={"text-dark  " + HeaderStyles.banner}>
            <h1 className={"display-4 " + HeaderStyles.bannerHeading}><span className=" font-weight-bold ">Citrine</span><span
                className="display-3 ">tech</span> Limited</h1>
            <p className={"lead text-dark " + HeaderStyles.bannerPar}>Managed IT services provider with a track record of providing hybrid solutions tailored for mid-market and enterprise companies. </p>

            <Link href="#contact">
                <a className={"btn btn-warning p-3 "+HeaderStyles.btn}>Contact Us</a>
            </Link>
            
        </div>
    </header>
);

export default Header;