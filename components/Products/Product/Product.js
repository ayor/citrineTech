import React from 'react'
import Image from 'next/image';
import ProductStyles from '../../../styles/Products.module.css';

const Product = ({ image, header, text, productClass }) => (
    <div className="col-md-5 col-lg-3 text-center">
    <div className={"card contact_card m-1 "+ productClass}>

        <Image className=" card-img-top  img-fluid mb-3" priority={true} alt={`A printer with a caption saying ${header}`} src={image} />
        <div className="card-body">
            <p className="text-muted card-text">{text}.</p>
        </div>
    </div>
</div>
);

export default Product;