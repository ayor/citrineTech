import React from "react";
import { data } from './data';
import Service from './Service/Service';
import Image from 'next/image';
import ServiceImage from '../../public/img/ServiceWoman.jpg';
import ServiceStyle from '../../styles/Products.module.css';


const Services = (props) => {
    // const _services = (<div className="row my-5">
    //     {data.map(service => (
    //         <div key={service.id} className={service.classKey.join(' ')}>
    //             <Service 
    //                 imageSrc={service.imageSrc}
    //                 header={service.header} 
    //                 text={service.text} />
    //         </div>
    //     ))}
    // </div>
    // )

    return (
        <section className="p-5  bg-white">
            <div className="container" id="services">
                <div className="row m-2  ">
                    <div className="col p-2">
                        <p className="text-secondary">Our Services</p>
                        <h2 className={ServiceStyle.headerTextClass1}>
                            Best Services you can get!!
                        </h2>
                    </div>
                    <div className="col px-3">
                        <p className="text-secondary pt-5 px-5">We are one of the fastest growing solutions providers, a feat that has been fueled by the results we have achieved working with clients in a wide array of niches.</p>
                        <div className="d-flex justify-content-end ">
                            <Image src={ServiceImage} className="img-fluid rounded-circle h-100" alt="Sales rep statment" width="80" height="80" />
                        </div>
                    </div>
                </div>
                <div className="row bg-light p-3 ">
                    <div className="col">
                        <div className="row m-2 justify-content-center">
                            <div className={"col-md-6 col-lg-7 m-1 p-0 " + ServiceStyle.Image1}>
                                <div className={"w-100 h-100 d-flex  align-items-center justify-content-center "+ ServiceStyle.ServiceText1}>
                                    <p className="text-white ">Enterprise Automation <i className="fas fa-search text-white mt-2 "></i></p>
                                    
                                </div>
                            </div>
                            <div className={"col-md-6 col-lg-4 m-1 p-0 " + ServiceStyle.Image2}>
                            <div className={"w-100 h-100 d-flex  align-items-center justify-content-center "+ ServiceStyle.ServiceText1}>
                                    <p className="text-white ">Telephony and Communication <i className="fas fa-search text-white mt-2 "></i></p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row  m-2 justify-content-center">
                            <div className={"col col-md-4 m-1 p-0 " + ServiceStyle.Image3}>
                            <div className={"w-100 h-100 d-flex  align-items-center justify-content-center "+ ServiceStyle.ServiceText1}>
                                    <p className="text-white ">Managed IT Services <i className="fas fa-search text-white mt-2 "></i></p>
                                    
                                </div>

                            </div>
                            <div className={"col col-md-7 m-1 p-0 " + ServiceStyle.Image4}>
                            <div className={"w-100 h-100 d-flex  align-items-center justify-content-center "+ ServiceStyle.ServiceText1}>
                                    <p className="text-white ">Infrastructure Security Service <i className="fas fa-search text-white mt-2 "></i></p>
                                    
                                </div>

                            </div>
                
                        </div>
                    </div>
                </div>

                {/* {showComp ? <Info>{filteredComponent.component}</Info> : null} */}

            </div>
        </section>
    )
};

export default Services;