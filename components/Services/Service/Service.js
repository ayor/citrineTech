import React from "react";
import Styles from '../../../styles/Products.module.css'

const Service = (props) =>(<div className={"card p-3 "+ Styles.ServiceCard}>
        <i className="fa fa-users fa-3x text-warning mb-4"></i>
        <h3 className="text-muted mb-3">{props.header}</h3>
        <p className="text-muted">{props.text} 
        </p>
    </div>
);

export default Service;