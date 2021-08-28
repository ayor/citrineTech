import React from 'react';
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Products from "../components/Products/Products";
import ExploreServices from '../components/Services/ExploreServices';
import Contact from "../components/Contact/Contact";

export default function Home() {
  
  return (
    <>
      <Header />
      <Services />
      <ExploreServices />
      <Products />
      <Contact />

    </>
  )
};

