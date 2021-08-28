import React from "react";
import Styles from '../../../styles/Products.module.css'

               

const Service = (props) =>(<div className={" p-3 "+ Styles.ServiceCard}>
    <i className={`fa fa-${props.iconName} fa-4x text-secondary mb-2`}></i>
        <h3 className="text-muted mb-3">{props.header}</h3>
        <p className="text-muted">{props.text} 
        </p>
        {/* <div>
            
        </div> */}
    </div>
);

export default Service;