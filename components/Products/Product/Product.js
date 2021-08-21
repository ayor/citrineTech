import React from 'react'
import Image from 'next/image';
import ProductStyles from '../../../styles/Products.module.css';

const Product = ({image, header, text}) => (
    <header >
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col p-4">
<Image src={image} className="img img-fluid rounded" height="1500" />
</div>
            <div className="col  ">
                <div className="p-5 w-75">
                    <h2 className="display-4 font-weight-bolder ">{header}</h2>
                    
                    <p className="lead "> {text}
                            </p>
                           
                </div>
                
            </div>
        </div>
    </header>
);

export default Product;