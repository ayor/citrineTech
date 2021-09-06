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
  const [showProdClasses, setprodClasses] = useState(false);
  const [showHeaderText, setheaderTextClass] = useState(false);

  const handleScroll = (event) => {
    const val = window.scrollY;
    console.log(window.scrollY);


    if (val >= 720 && val < 900) {
      setTxtClasses([...txtClass, ]);
    } else if (val >= 900 && val < 1000) {
      setheaderTextClass(true)
    } else if (val >= 1100) {
      setprodClasses(true);
    }
    else {
      // setIsSet(false);
      setClasses(["h2 text-dark text-center font-weight-bold mb-4"]);
      setTxtClasses(["lead"]);
      setheaderTextClass(false)
      setprodClasses(false);

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
      <Products
        showHeaderClass={showHeaderText}
        showClass={showProdClasses}
      />
      <Contact />

    </>
  )
};

