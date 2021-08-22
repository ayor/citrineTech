import React from "react";
import Product from './Product/Product';
import Header from '../Header/Header'; 
import { products } from "./data";
const Index = () => {
    const prods = products.map((product, ind) => (
        <Product 
        key={ind}
        header={product.header}
        text={product.text}
        image={product.image}
         />
    ))
    return(
    <>
    <Header
    title={"Our Products"}
    showbtn={false} 
    bannerMessage={`At Cetrine Technologies Limited we deliver on every aspect of a complete Hybrid
     IT solution through any combination of the following products.`}
     /> 
    {prods}
    </>
)};

export default Index; 