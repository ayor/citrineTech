import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavStyles from '../../styles/Nav.module.css';

const Nav = () => {
    const [activeState, setActiveState] = useState()
    useEffect(()=>{

    })

    return(
    <nav className={"navbar navbar-expand-lg fixed-top " + NavStyles.navMenu}>
        <a href="#" className="navbar-brand text-light text-uppercase">
            <Image src={"https://citrinetechltd.com/wp-content/uploads/2020/10/Citrine-logo-NEW.png"} className="img img-fluid" width="60" loading="lazy"  height="60" alt="citrinetech"/>
        </a>
        <button className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#myNavbar">
            <div className={"bg-light " + NavStyles.line1}></div>
            <div className={"bg-light " + NavStyles.line2}></div>
            <div className={"bg-light " + NavStyles.line3}></div>
        </button>
        <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" 
        id="myNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/" >
                        <a className={`nav-link m-2 ${NavStyles.menuItem}`}>Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link href="#services">
                        <a className={`nav-link m-2 ${NavStyles.menuItem}`}>Our Services</a>

                    </Link>
                </li>
                <li className="nav-item">
                <Link href="#products" >
                        <a className={`nav-link m-2 ${NavStyles.menuItem}`}>Products</a>

                    </Link>
                </li>
                <li className="nav-item">
                <Link href="#contact" >
                        <a className={`nav-link m-2 ${NavStyles.menuItem}`}>Contact Us</a>

                    </Link>
                </li>
                <li className="nav-item">
                <Link href="http://www.blog.citrinetechltd.com/"  >
                        <a target="_blank" className={`nav-link m-2 ${NavStyles.menuItem}`}>Blog</a>

                    </Link>
                </li>
            </ul>
        </div>
    </nav>

)}
export default Nav;