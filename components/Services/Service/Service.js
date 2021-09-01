import React, { useState, useEffect } from "react";
import Styles from '../../../styles/Products.module.css'



const Service = (props) => {
    const [classes, setClasses] = useState(["p-3", Styles.ServiceCard]);


    const handleScroll = (event) => {
        if (window.scrollY >= 200) {

            let arr = [...classes, props.class];
            setClasses(arr);

        } else {
            // setIsSet(false);
            setClasses(["p-3", Styles.ServiceCard])
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return (<div className={classes.join(' ')}>
        <i className={`fa fa-${props.iconName} fa-4x text-secondary mb-2`}></i>
        <h3 className="text-muted mb-3">{props.header}</h3>
        <p className="text-muted">{props.text}
        </p>
        {/* <div>
            
        </div> */}
    </div>
    )
};

export default Service;