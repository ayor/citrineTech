import styles from '../styles/Home.module.css';
import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import Products from "../components/Products/Products";
import Contact from "../components/Contact/Contact";

export default function Home() {
  
  return (
    <>
      <Header />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  )
};

