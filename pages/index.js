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
  const [headerTextClass1, setheaderTextClass1] = useState([]);
  const [headerTextClass2, setheaderTextClass2] = useState([]);



  const handleScroll = (event) => {
    const val = window.scrollY;
    console.log(window.scrollY);


    if (val >= 700) {
      setTxtClasses([...txtClass, ServiceStyle.ServiceInfo]);
      setheaderTextClass1([ServiceStyle.headerTextClass1]);
    }
    else {
      // setIsSet(false);
      setClasses(["h2 text-dark text-center font-weight-bold mb-4"]);
      setTxtClasses(["lead"]);
      setheaderTextClass1([]);
      setheaderTextClass2([]);
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
      <Products headerText1={headerTextClass1.join(" ")}
        headerText2={headerTextClass2.join(" ")} />
      <Contact />

    </>
  )
};

