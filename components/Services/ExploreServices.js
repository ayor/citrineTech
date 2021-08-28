import React from 'react';
import Btn from '../Button/Button';
import Styles from '../../styles/Products.module.css';


const ExploreServices = props => (
    <div className={"row p-3 text-white mx-5 " + Styles.ServiceBanner}>
        <div className="col m-4">
            <p className="lead">Our Managed IT Services program provides affordable proactive IT management,
    monitoring and support to growing businesses at a fixed monthly fee. </p>

        </div>
        <div className="col m-4 text-center">
            <Btn btnHref={"/services"} title={"Explore Our Services"} />
        </div>
    </div>
)
    ;

export default ExploreServices