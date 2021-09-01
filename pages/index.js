import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Products from "../components/Products/Products";
import ExploreServices from '../components/Services/ExploreServices';
import Contact from "../components/Contact/Contact";
import ServiceStyle from '../styles/Products.module.css';

export default function Home() {
  const [ServicesClass, setClasses] = useState(["h2 text-dark text-center font-weight-bold mb-4"]);
  const [txtClass, setTxtClasses] = useState(["lead"]);


  const handleScroll = (event) => {
    const val = window.scrollY ; 
    console.log(window.scrollY);
   

    if (val >= 680) {
      
      setTxtClasses([...txtClass, ServiceStyle.ServiceInfo]);
    } else {
      // setIsSet(false);
      setClasses(["h2 text-dark text-center font-weight-bold mb-4"]);
      setTxtClasses(["lead"]);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
  return (
    <>
      <Header />
      <Services headerClass={ServicesClass.join(' ')} />
      <ExploreServices textClass={txtClass.join(" ")} />
      <Products />
      <Contact />

    </>
  )
};

