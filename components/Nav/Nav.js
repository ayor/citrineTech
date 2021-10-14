import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavStyles from '../../styles/Nav.module.css';
import Logo from '../../public/img/logo.png';

const Nav = () => {
  const [activeState, setActiveState] = useState('Home');
  const [toggleBar, setToggleState] = useState(false);

  useEffect(() => {
    if (window.screen['width'] >= 565) {
      setToggleState(true);
    }
  }, [setToggleState]);

  const handleClick = (navType) => {
    setActiveState(navType);
  };

  return (
    <nav className={'navbar navbar-expand-md container  ' + NavStyles.navMenu}>
      <Link href="/" passHref>
        <a className="navbar-brand text-light text-uppercase">
          <Image
            src={Logo}
            className="img img-fluid"
            width="80"
            priority={true}
            height="80"
            alt="citrinetech"
          />
        </a>
      </Link>
      <div className="m-2" onClick={() => setToggleState(!toggleBar)}>
        <i className="fas fa-bars "></i>
      </div>
      {toggleBar ? (
        <div
          className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold"
          id="myNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleClick.bind(this, 'Home')}>
              <Link href="/">
                <a
                  className={
                    activeState === 'Home'
                      ? `nav-link m-2 ${NavStyles.navItem}`
                      : `nav-link m-2 ${NavStyles.menuItem}`
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={handleClick.bind(this, 'Services')}
            >
              <Link href="/#services">
                <a
                  className={
                    activeState === 'Services'
                      ? `nav-link m-2 ${NavStyles.navItem}`
                      : `nav-link m-2 ${NavStyles.menuItem}`
                  }
                >
                  Our Services
                </a>
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={handleClick.bind(this, 'Products')}
            >
              <Link href="/#products">
                <a
                  className={
                    activeState === 'Products'
                      ? `nav-link m-2 ${NavStyles.navItem}`
                      : `nav-link m-2 ${NavStyles.menuItem}`
                  }
                >
                  Products
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="http://www.blog.citrinetechltd.com/">
                <a
                  target="_blank"
                  className={`nav-link m-2 ${NavStyles.menuItem}`}
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default Nav;
