import React, { useEffect, useState, useRef } from 'react';
import Btn from '../Button/Button';
import HeaderStyles from '../../styles/Header.module.css';
import UnderLine from './Underline';
import Image from 'next/image';
import citrineSrc from '../../public/img/CITRINEFRONTPAGE.png';

const Header = ({ title, bannerMessage, showbtn }) => {
  // const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null);

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

  const headerTitle = !title
    ? 'Better, Faster & Efficient IT Services for you!'
    : title;
  const headerMessage = !bannerMessage
    ? `Protection, Preparedness & Productivity `
    : bannerMessage;
  if (showbtn != false) {
    showbtn = true;
  }

  return (<>
    <section className={'container px-3 ' + HeaderStyles.header}>
      <header ref={myRef} className={`row`}>
        <div className="col">
          <div
            // + HeaderStyles.banner
            className={'text-dark p-2 ' + HeaderStyles.HeaderImg}
          >
            <small className="text-secondary mt-2"> {headerMessage}</small>
            <h1
              className={
                'font-weight-bold text-dark pl-4 mb-4 ' +
                HeaderStyles.bannerHeading
              }
            >
              Your technology partner with a focus on providing proactive
              solutions
            </h1>
            {/* <UnderLine /> */}
            {showbtn ? <Btn btnHref={'#contact'} title={'Contact Us'} /> : null}
          </div>
        </div>
      </header>
    </section>
    <div className="row mt-3">
      <div className="col-md-4 col-sm-8  offset-sm-2 offset-md-7 ">
        <div className={'card pt-4 px-4 ' + HeaderStyles.WelcomeMessage}>
          <p className="text-secondary card-title">
            Citrine is an IT company that offers timely services as well as a
            vision for technology that will grow with your business. We provide
            businesses with affordable and reliable IT services aimed at
            addressing Protection, Preparedness, and Productivity.
          </p>
        </div>
      </div>
    </div>
  </>
  );

export default Header;
