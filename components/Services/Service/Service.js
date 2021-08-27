import React from "react";
import Styles from '../../../styles/Products.module.css'

               

const Service = (props) =>(<div onClick={props.clicked} className={"card p-3 "+ Styles.ServiceCard}>
        <h3 className="text-muted mb-3">{props.header}</h3>
        <p className="text-muted">{props.text} 
        </p>
        <div>
            <i className="fa fa-chevron-circle-down"></i>
        </div>
    </div>
);

export default Service;