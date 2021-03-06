import React, { useEffect, useState, useRef } from 'react';
import Btn from '../Button/Button';
import HeaderStyles from '../../styles/Header.module.css';
import UnderLine from './Underline';
import Nav from '../Nav/Nav';

import NET from 'vanta/dist/vanta.net.min.js';
import * as THREE from 'three';
import Image from 'next/image';
import citrineSrc from '../../public/img/CITRINEFRONTPAGE.png';

const Header = ({ title, bannerMessage, showbtn }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          color: 0x311e1e,
          // backgroundColor: 0x848444,
          backgroundColor: 0xb3b343,
          points: 15.0,
          maxDistance: 30.0,
        })
        // RING({
        //     el: myRef.current,
        //     THREE,
        //     backgroundColor: 0xc3c24f
        // })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  const headerTitle = !title
    ? 'Better, Faster & Efficient IT Services for you!'
    : title;
  const headerMessage = !bannerMessage
    ? `Protection, Preparedness & Productivity `
    : bannerMessage;
  if (showbtn != false) {
    showbtn = true;
  }

  return (
    <section
      ref={myRef}
      className={'container-fluid vh-100 ' + HeaderStyles.header}
    >
      <Nav />
      <header className={`row `}>
        <div className="col-12 h-75  col-md-12 col-lg-6">
          <div className={'text-dark p-2 ' + HeaderStyles.HeaderImg}>
            <small className="text-muted mt-2"> {headerMessage}</small>
            <h1
              className={
                'font-weight-bold text-light pl-4 m-5 ' +
                HeaderStyles.bannerHeading
              }
            >
              Your technology partner with a focus on providing proactive
              solutions
            </h1>
            {showbtn ? <Btn btnHref={'#contact'} title={'Contact Us'} /> : null}
          </div>
        </div>
        {/* <div className={'col-12 col-md-12 col-lg-6 '}>
          <Image
            src={citrineSrc}
            alt="citrinetech header"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div> */}
      </header>

      {/* <div className="row">
        <div className="col-md-4 col-sm-8  offset-sm-2 offset-md-7 ">
          <div className={'card pt-4 px-4 ' + HeaderStyles.WelcomeMessage}>
            <p className="text-secondary card-title">
              Citrine is an IT company that offers timely services as well as a
              vision for technology that will grow with your business. We
              provide businesses with affordable and reliable IT services aimed
              at addressing Protection, Preparedness, and Productivity.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Header;
