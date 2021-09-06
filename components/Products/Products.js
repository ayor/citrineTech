import React from "react";
import Product from './Product/Product';
import Btn from '../Button/Button'
import { products } from './data'
import ProductStyle from '../../styles/Products.module.css';

const Products = (props) => {

    const prods = products.map((product, ind) => {
        let periodInd = product.text.indexOf(".")
        return (
            <Product
                productClass={props.showClass ? product.class : null}
                key={ind}
                header={product.header}
                text={product.text.slice(0, periodInd)}
                image={product.image}
            />
        )
    })

    return (
        <section className="p-5 products bg-light">
            <div className="container-fluid" id="products">
                {/* <!-- title --> */}
                <div className="row text-dark text-center">
                    <div className="col m-4">

                        <h2 className={"h2 lead-anim " + props.headerText1}>
                            At Cetrine Technologies Limited we deliver on
                            every aspect of a complete Hybrid
                            IT solution through any
                            combination
                            of the following products.
                        </h2>
                    </div>
                </div>
                {/* <!-- end of title --> */}
                <div className="row justify-content-center my-5">
                    {prods}
                </div>

                <div className={"row p-3 text-light " + ProductStyle.ProductHeader}>
                    <div className="col m-4">
                        <p className={"lead " + props.bannerText}>We are a team that exudes a blend of creativity, responsibility,
                        and natural love for solving puzzles through custom-designed solutions for clients from broad spectrums of the industry.
                        We support clients from virtually every industry out there,
                        be it healthcare, manufacturing, financial services, retail, education, and governments, you name them!
           </p>
                    </div>
                    <div className={"col m-4 py-4 text-center "}>
                        <Btn btnHref={"#products"} title={"See Our products"} />
                    </div>

                </div>

            </div>
        </section>)
};

export default Products;

