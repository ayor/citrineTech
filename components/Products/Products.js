import React from "react";
// import Product from './Product/Product';
// import Btn from '../Button/Button'
// import { products } from './data'
import Image from 'next/image';
import productImg from '../../public/img/user1.jpg';
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
            <section className="p-5 products container" id="products">
                {/* <!-- title --> */}
                <div className="row text-dark p-3">
                    <div className="col col-md-5">
                        <p className="text-secondary">Our products</p>
                        <h2 className={ProductStyle.headerTextClass2}>Amazing Products you can rely on.</h2>
                    </div>
                    <div className="col col-md-7 p-0 ">
                        <div className={"w-100 h-100 p-5 " + ProductStyle.ProductItems}>
                            <ul className="list-inline">
                                <li className="list-item p-3 my-3"><i className="fas fa-check-circle mr"></i> Hospital Management System</li>
                                <li className="list-item p-3 my-3"><i className="fas fa-check-circle mr"></i> Print Management Solution</li>
                                <li className="list-item p-3 my-3"><i className="fas fa-check-circle mr"></i> Enterprise Resource Planning Solution</li>
                                <li className="list-item p-3 my-3"><i className="fas fa-check-circle mr"></i> Document Management Solution</li>
                                <li className="list-item p-3 my-3"><i className="fas fa-check-circle mr"></i> Corporate Gifting Solution</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            {/* <section className="container-fluid ">
                <div className="row">
                    <div className="col col-md-4 ">
                        <div className={"w-100 h-100  align-items-center p-2   "+ ProductStyle.ProductsMessage}>
                            <p className="text-secondary px-4 mb-1 pt-4 m-0"> We are one of the fastest growing solutions provider, a feat that has been fueled by the results we have achieved working with clients in a wide array of niches.</p>
                        <Image src={productImg} width="80" height="80" className="img-fluid rounded-circle"/>
                        </div>
                    </div>

                </div>

            </section> */}
        </>
    )
};

export default Products;

