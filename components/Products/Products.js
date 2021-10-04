import React from "react";
// import Product from './Product/Product';
// import Btn from '../Button/Button'
// import { products } from './data'
// import Image from 'next/image';
// import productImg from '../../public/img/user1.jpg';
import ProductStyle from '../../styles/Products.module.css';

const Products = (props) => {

    // const prods = products.map((product, ind) => {
    //     let periodInd = product.text.indexOf(".")
    //     return (
    //         <Product
    //             productClass={props.showClass ? product.class : null}
    //             key={ind}
    //             header={product.header}
    //             text={product.text.slice(0, periodInd)}
    //             image={product.image}
    //         />
    //     )
    // })

    return (
        <>
            <section className="p-2 products container" id="products">
                {/* <!-- title --> */}
                <div className="row text-dark p-3">
                    <div className=" col-md-5 mb-3">
                        <small className="text-secondary">Our products</small>
                        <h2 className={ProductStyle.headerTextClass2}>We create smart solutions that solve present-day problems whilst keeping an eye on future challenges.</h2>
                    </div>
                    <div className=" col-md-7  ">
                        <div className={"w-100 h-100 " + ProductStyle.ProductItems}>
                            <ul className="list-inline">
                                <li className="list-item p-3 my-1"><i className="fas fa-check-circle mr"></i> Hospital Management System</li>
                                <li className="list-item p-3 my-1"><i className="fas fa-check-circle mr"></i> Print Management Solution</li>
                                <li className="list-item p-3 my-1"><i className="fas fa-check-circle mr"></i> Enterprise Resource Planning Solution</li>
                                <li className="list-item p-3 my-1"><i className="fas fa-check-circle mr"></i> Document Management Solution</li>
                                <li className="list-item p-3 my-1"><i className="fas fa-check-circle mr"></i> Corporate Gifting Solution</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
             <section className="container-fluid ">
                <div className="row">
                    <div className="col col-md-6 col-g-3 ">
                        <div className={"w-100 h-100  align-items-center p-3   "+ ProductStyle.ProductsMessage}>
                            <p className=" px-4 mb-1 pt-4 m-0"> We have successful implementations; our IT solutions and services are aimed to deliver business value and reduce cost.</p>
                        </div>
                    </div>

                </div>

            </section> 
        </>
    )
};

export default Products;

