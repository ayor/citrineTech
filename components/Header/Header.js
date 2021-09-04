import React, { useEffect, useState, useRef } from 'react'
import Btn from '../Button/Button';;
import HeaderStyles from '../../styles/Header.module.css';
import NET from "vanta/dist/vanta.net.min";
// import RING from "vanta/dist/vanta.rings.min";
import * as THREE from 'three';

const Header = ({ title, bannerMessage, showbtn }) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    THREE,
                    color: 0x311e1e,
                    // backgroundColor: 0x848444,
                    backgroundColor: 0xb3b343,
                     points: 15.00,
                    maxDistance: 30.00
                })
                // RING({
                //     el: myRef.current,
                //     THREE,
                //     backgroundColor: 0xc3c24f
                // })
            )
        }
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy()
            }
        }
    }, [vantaEffect])

    const headerTitle = !title ? "Citrinetech Limited" : title;
    const headerMessage = !bannerMessage ? `Managed IT services provider with a track record 
    of providing hybrid solutions tailored for mid-market and enterprise companies. ` : bannerMessage;
    if (showbtn != false) {
        showbtn = true;
    }


    return (
        <header ref={myRef} className={`vh-100 row ` + HeaderStyles.header}>
            <div className={"text-light " + HeaderStyles.banner}>
                <h1 className={"display-4 " + HeaderStyles.bannerHeading}>{headerTitle}</h1>
                <p className={"lead text-light " + HeaderStyles.bannerPar}>{headerMessage}</p>

                {showbtn ? <Btn btnHref={"#contact"} title={"Contact Us"} /> : null}
            </div>
        </header>
    )
};

export default Header;


