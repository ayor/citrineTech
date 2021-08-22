import React from "react";
import Styles from '../../styles/Products.module.css'
import Btn from '../Button/Button';

const Services = () => (
    <section className="p-5  bg-light">
        <div className="container-fluid" id="services">
            <h2 className="h2 text-dark text-center font-weight-bold mb-4">We deliver on every aspect of a complete Hybrid IT solution through any combination of the following</h2>
            <div className="row my-5">
                <div className="col-md-6 col-lg-3 text-center">
                    <i className="fa fa-users fa-3x text-warning mb-4"></i>

                    <h3 className="text-muted mb-3">Managed Services</h3>
                    <p className="text-muted">
                        {/* The Citrine Technologies Managed IT Services program provides
                            affordable
                            proactive IT management, monitoring and support to growing businesses at a fixed monthly
                            fee. */}
                            Utilizing our unique framework for providing managed IT services, Citrine Technologies
                            provides
                            a range of proactive services to keep your computer systems,
                            IT infrastructure up and running and your people and business productive</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center">

                    <i className="fa fa-tasks fa-3x text-warning mb-4"></i>
                    <h3 className="text-muted mb-3">IT Project Management and Consultancy</h3>
                    <p className="text-muted">
                        Citrine Technologies Ltd shall develop a methodology of helping you to
                        understand your specific cyber domain,
                        and how you can reduce the threats you face and become both cyber aware and cyber
                        secure.
                            {/* Our Infrastructure Security service will provide your organization with a detailed
                            report on
                            your vulnerabilities and a range of recommendations to help you overcome these issues.
                            This
                            service will not only enable you to become cyber aware but also give you a detailed
                            understanding of cybersecurity and the elements included within it. */}
                    </p>
                </div>


                <div className="col-md-6 col-lg-3 text-center">
                    <div className="service_info_one">

                        <i className="fa fa-volume-control-phone fa-3x text-warning mb-4"></i>
                        <h3 className="text-muted mb-3">Telephony and Communication</h3>
                        <p className="text-muted">
                            We offer a complete cost-effective telephone solution platform
                            with an
                            open
                                source systems {"&"} appliances addressing a wide range of call centre/contact centre
                                solutions
                                {"&"}
                                enterprises solutions.

                                 {/* including IVR systems, open source VoIP PBX, call centre
                                dialler,
                                voice dialler, voice logger, automatic call distribution, predictive dialler, hosted
                                dialler,
                                GSM {"&"} SMS integration, VoIP call recording, customized line call recording /
                                monitoring
                                /
                                tracking. */}

                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 text-center">
                    <div className="service_info_two">

                        <i className="fa fa-cogs fa-3x text-warning mb-4"></i>
                        <h3 className="text-muted mb-3">Enterprise Automation</h3>
                        <p className="text-muted">
                            Forward-thinking business leaders are challenging their organisations
                            to
                            achieve transformation by harnessing digital technologies with organisational,
                            operational,
                            and
                            business innovation to create new ways of operating and growing businesses.
                                {/* Optimizing IT infrastructure and operational processes through automation is key to
                                successfully
                                achieving digital transformation. */}
                        </p>
                    </div>
                </div>

            </div>
            <div className={"row p-3 text-white " + Styles.ServiceInfo}>
                <div className="col m-4">
                    <p className="lead">Our Managed IT Services program provides affordable proactive IT management,
                    monitoring and support to growing businesses at a fixed monthly fee. </p>

                </div>
                <div className="col m-4 text-center">
                    <Btn btnHref={"/services"} title={"Explore Our Services"} />
                </div>

            </div>
        </div>
    </section>
);

export default Services;