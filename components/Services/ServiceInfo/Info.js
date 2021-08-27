import React from "react";
import styles from '../../../styles/Products.module.css'

const Info = (props) => (
    <div className={styles.ServiceInfo}>
        {props.children}
    </div>
);

export default Info;

