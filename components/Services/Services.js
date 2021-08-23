import React from "react";
import Styles from '../../styles/Products.module.css'
import Btn from '../Button/Button';
import { data } from './data';
import Service from './Service/Service';

const Services = () => {

    const _services = data.map(service => (
        <div key={service.id} className="col-md-6 col-lg-3 text-center">
            <Service header={service.header} text={service.text} />
        </div>
    ))


    return (
        <section className="p-5  bg-light">
            <div className="container-fluid" id="services">
                <h2 className="h2 text-dark text-center font-weight-bold mb-4">We deliver on every aspect of a complete Hybrid IT solution through any combination of the following</h2>
                <div className="row my-5">
                    {_services}
                </div>
                <div className={"row p-3 text-white " + Styles.ServiceInfo}>
                    <div className="col m-4">
                        <p className="lead">Our Managed IT Services program provides affordable proactive IT management,
                    monitoring and support to growing businesses at a fixed monthly fee. </p>

                    </div>
                    <div className="col m-4 text-center">
                        <Btn btnHref={"#services"} title={"Explore Our Services"} />
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Services;