import React from "react";
import { data } from './data';
import Service from './Service/Service';
import Image from 'next/image';
import ServiceImage from '../../public/img/ServiceWoman.jpg';
import ServiceStyle from '../../styles/Products.module.css';
import Link from "next/link";


const Services = (props) => {
    return (
        <section className={"p-2  bg-white "+ ServiceStyle.Services }>
            <div className="container" id="services">
                <div className="row mb-2  ">
                    <div className="col p-2">
                        <small className="text-secondary">Our Services</small>
                        <h3 className={"text-center m-3 "+ServiceStyle.headerTextClass1}>
                        We deliver on every aspect of a complete Hybrid IT solution.
                        </h3>
                    </div>
                   
                </div>
                <div className="row bg-light ">
                    <div className="col">
                        <div className="row m-2 justify-content-center">
                            <div className={"col-md-6 col-lg-7 m-1 p-0 " + ServiceStyle.Image1}>
                                <Link href="/services/1" passHref>
                                    <div className={"w-100 h-100 d-flex  align-items-center justify-content-center " + ServiceStyle.ServiceText1}>
                                        <p className="text-white ">Enterprise Automation <i className="fas fa-search text-white mt-2 "></i></p>

                                    </div>
                                </Link>
                            </div>
                            <div className={"col-md-6 col-lg-4 m-1 p-0 " + ServiceStyle.Image2}>
                                <Link href="/services/2" passHref>
                                    <div className={"w-100 h-100 d-flex  align-items-center justify-content-center " + ServiceStyle.ServiceText1}>
                                        <p className="text-white ">Telephony and Communication <i className="fas fa-search text-white mt-2 "></i></p>

                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row  m-2 justify-content-center">
                            <div className={"col-md-6 col-lg-4 m-1 p-0 " + ServiceStyle.Image3}>
                                <Link href="/services/3" passHref>
                                    <div className={"w-100 h-100 d-flex  align-items-center justify-content-center " + ServiceStyle.ServiceText1}>
                                        <p className="text-white ">Managed IT Services <i className="fas fa-search text-white mt-2 "></i></p>

                                    </div>
                                </Link>
                            </div>
                            <div className={"col-md-6 col-lg-7 m-1 p-0 " + ServiceStyle.Image4}>
                                <Link href="/services/4" passHref>

                                    <div className={"w-100 h-100 d-flex  align-items-center justify-content-center " + ServiceStyle.ServiceText1}>
                                        <p className="text-white ">Infrastructure Security Service <i className="fas fa-search text-white mt-2 "></i></p>

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        </section >
    )
};

export default Services;