import React from 'react'
import Link from 'next/link';
import ProductStyles from '../../../styles/Products.module.css';

const ProductHeader = () => (
    <header className={" vh-100 " + ProductStyles.ProductHeader}>
        <div className="row h-100 align-items-center">
            <div className="col d-flex justify-content-center ">
                <div className="p-5 w-75">
                    <h2 className="display-4 font-weight-bolder text-light">Print Management Solutions</h2>
                    <p className="lead text-light">
                        Our clients choose our print management solutions for a number of reasons,
                         but one thing that has been realized from every of our relationships is reduced cost. 
                         These include costs from print resources waste or abuse, management of print activities using costly print servers,
                          high carbon-to-environment impact levels, exposure of sensitive information to the wrong crowd, and much more.
</p>
                </div>
            </div>
        </div>
    </header>
);

export default ProductHeader;