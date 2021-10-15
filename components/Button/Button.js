import React from 'react';
import Link from 'next/link';
import HeaderStyles from '../../styles/Header.module.css';

const Button = (props) => {
  return (
    <Link href={props.btnHref} passHref>
      <a className={'btn p-2 ' + HeaderStyles.btn}>
        <span className="mr-3">{props.title} </span>

        <i className="fa fa-paper-plane "></i>
      </a>
    </Link>
  );
};

export default Button;
