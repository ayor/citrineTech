import React, { useEffect, useState, useRef } from 'react'
import Btn from '../Button/Button';;
import HeaderStyles from '../../styles/Header.module.css';
import UnderLine from './Underline';
import HeaderImg from './HeaderImage';
import Image from 'next/image';
import maleImg from '../../public/img/headerImg.jpg'
import NET from "vanta/dist/vanta.net.min";
// import RING from "vanta/dist/vanta.rings.min";
import * as THREE from 'three';

const Header = ({ title, bannerMessage, showbtn }) => {
    // const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(
    //             NET({
    //                 el: myRef.current,
    //                 THREE,
    //                 color: 0x311e1e,
    //                 // backgroundColor: 0x848444,
    //                 backgroundColor: 0xb3b343,
    //                  points: 15.00,
    //                 maxDistance: 30.00
    //             })
    //             // RING({
    //             //     el: myRef.current,
    //             //     THREE,
    //             //     backgroundColor: 0xc3c24f
    //             // })
    //         )
    //     }
    //     return () => {
    //         if (vantaEffect) {
    //             vantaEffect.destroy()
    //         }
    //     }
    // }, [vantaEffect])

    const headerTitle = !title ? "Better, Faster & Efficient IT Services for you!" : title;
    const headerMessage = !bannerMessage ? `Protection, Preparedness & Productivity ` : bannerMessage;
    if (showbtn != false) {
        showbtn = true;
    }


    return (
        <section className={"container px-3 " + HeaderStyles.header}>
            <header ref={myRef} className={`row`}>
                <div className="col">
                    <div className="row ">
                        <div className="col ">
                            <div className={"text-dark p-2 " + HeaderStyles.banner}>
                                <p className="text-secondary mt-2 "> {headerMessage}</p>
                                <h1 className={"font-weight-bold text-dark pl-4 mb-4 " + HeaderStyles.bannerHeading}>{headerTitle}</h1>
                                <div className={HeaderStyles.Line}>
                                    <UnderLine />
                                </div>
                                {showbtn ? <Btn btnHref={"#contact"} title={"Contact Us"} /> : null}
                            </div>
                            <div className={HeaderStyles.HeaderImg}>
                                <HeaderImg />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={"card col-md-4 offset-md-7 pt-4 px-4  " + HeaderStyles.WelcomeMessage}>
                            <p className="text-secondary card-title">Welcome to Citrine Technologies Ltd (Citrine), we are a one stop IT Shop and a managed IT service provider with a track record of providing hybrid solutions tailored for mid-market and enterprise companies.</p>
                            <div className="d-flex justify-content-end ">
                                <Image src={maleImg} className="img-fluid rounded-circle " alt="CEO's welcome message" width="80" height="80" />
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </section >
    )
};

export default Header;


