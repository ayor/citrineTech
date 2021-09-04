import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavStyles from '../../styles/Nav.module.css';

const Nav = () => {
    const [activeState, setActiveState] = useState("Home")
    useEffect(()=>{

    })

    const handleClick = (navType)=>{

        setActiveState(navType); 
    }

    return(
    <nav className={"navbar navbar-expand-lg fixed-top " + NavStyles.navMenu}>
        <a href="#" className="navbar-brand text-light text-uppercase">
            <Image src={"https://citrinetechltd.com/wp-content/uploads/2020/10/Citrine-logo-NEW.png"} className="img img-fluid" width="60" priority={true}  height="60" alt="citrinetech"/>
        </a>
        <button className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#myNavbar">
            <div className={"bg-light " + NavStyles.line1}></div>
            <div className={"bg-light " + NavStyles.line2}></div>
            <div className={"bg-light " + NavStyles.line3}></div>
        </button>
        <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" 
        id="myNavbar">
            <ul className="navbar-nav">
                <li className="nav-item" onClick={handleClick.bind(this, "Home")}>
                    <Link href="/" >
                        <a className={activeState === "Home" ? `nav-link m-2 ${NavStyles.navItem}` : `nav-link m-2 ${NavStyles.menuItem}` }>Home</a>
                    </Link>
                </li>
                <li className="nav-item" onClick={handleClick.bind(this, "Services")}>
                <Link href="/services">
                        <a className={activeState === "Services" ? `nav-link m-2 ${NavStyles.navItem}` : `nav-link m-2 ${NavStyles.menuItem}` }>Our Services</a>

                    </Link>
                </li>
                <li className="nav-item" onClick={handleClick.bind(this, "Products")}>
                <Link href="#products" >
                        <a className={activeState === "Products" ? `nav-link m-2 ${NavStyles.navItem}` : `nav-link m-2 ${NavStyles.menuItem}` }>Products</a>

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