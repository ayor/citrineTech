import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import SocialMediaLinks from './SocialMedia/SocialMediaLinks';

const Layout = ({ children }) => (
  <>
    {/* <Nav /> */}
    <SocialMediaLinks />
    {children}
    <Footer />
  </>
);

export default Layout;
