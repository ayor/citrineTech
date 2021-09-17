import React from "react";
import Link from 'next/link';
import HeaderStyles from '../../styles/Header.module.css';


const Button = (props) => {
    return (<Link href={props.btnHref}>
        <a className={"btn p-2 " + HeaderStyles.btn}><i className="fa fa-email ml-1"></i>{props.title}</a>
    </Link>)
};


export default Button;