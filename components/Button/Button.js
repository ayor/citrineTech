import React from "react";
import Link from 'next/link';
import HeaderStyles from '../../styles/Header.module.css';


const Button = (props) => {
    return (<Link href={props.btnHref}>
        <a className={"btn btn-warning p-3 " + HeaderStyles.btn}>{props.title}</a>
    </Link>)
};


export default Button;