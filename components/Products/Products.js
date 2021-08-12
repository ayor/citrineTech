import React from "react";

const Products=()=>(
    <section className="p-5 products bg-light">
    <div className="container-fluid" id="products">
        {/* <!-- title --> */}
        <div className="row text-dark text-center">
            <div className="col m-4">
                <h2 className="display-4 mb-4">Our Products </h2>
                <div className="underline mb-4"></div>
                <p className="lead lead-anim">At Cetrine Technologies Limited we deliver on every aspect of a complete Hybrid
                    IT solution through any
                    combination
                    of the following products.</p>
            </div>
        </div>
        {/* <!-- end of title --> */}
        <div className="row justify-content-center my-5">
            <div className="col-md-5 m-2 card p-5 contact_card text-center">
                <i className="fa fa-print fa-5x text-warning mb-4"></i>
                <h3 className="h2 mb-3 card-title">Print Management Solutions</h3>
                <p className="text-muted card-text">Our clients choose our print management solutions for a number
                    of
                    reasons, but one thing that has been realized from every of our relationships is reduced
                    cost.<br/>
                    These include costs from print resources waste or abuse, management of print activities
                    using
                    costly print servers, high carbon-to-environment impact levels, exposure of sensitive
                    information to the wrong crowd, and much more..</p>
            </div>
            <div className="col-md-5 m-2 card p-5 contact_card text-center">
                <i className="fa fa-hospital-o fa-5x text-warning mb-4"></i>
                <h3 className="h2 mb-3 card-title">Hospital Management System
                </h3>
                <p className="text-muted card-text">Technology that helps manage flow of information across a
                    healthcare
                    enterprise has to essentially keep pace with the challenges that healthcare professionals
                    face.<br/>
                    Access to accurate and meaningful information remains high on the demand list of all
                    stakeholders within the healthcare ecosystem. Software that moves information to the right
                    point
                    of contact at the right time and connects various stakeholders will address this need.<br/>
                    However,
                    systems of the future must provide smarter means of delivering meaningful information to a
                    diverse set of stakeholders who operate in a digital healthcare environment.</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-5 m-2 card p-5 contact_card text-center">
                <i className="fa fa-building fa-5x text-warning mb-4"></i>
                <h3 className="h2 mb-3 card-title">Enterprise Resource Planning Solution</h3>
                <p className="text-muted card-text">Are you tired of highly complex ERP systems with little or no
                    support? We know, we are tired too. At Citrine we apply our operational services across to
                    every
                    solution – even our ERP solutions.<br/>
                     We partner with the best locally and internationally to
                    deliver tailored ERP systems to meet your business needs. We don’t deliver solutions just
                    for
                    the day, we think about your future as well. Our solutions are agile, scalable and designed
                    to
                    accommodate your changing business requirements.

                </p>
            </div>
            <div className="col-md-5 m-2 card contact_card p-5 text-center">
                <i className="fa fa-book fa-5x text-warning mb-4"></i>
                <h3 className="h2 mb-3 card-title">Document Management Solutions </h3>
                <p className="text-muted card-text">Data is very critical to today’s work environments. Even more
                    important is ability to access readily and easily, required data.<br/>
                    With conventional document
                    management approaches, a file room or storage is needed; with staff to manage the
                    organization’s
                    data.<br/>
                     A number of limitation exists with this approach such as single point of failure in
                    the
                    event of a disaster, great difficulty in data extraction, high storage costs from cabinets,
                    papers, room, etc. Newer models make use of digital storage and file creation.</p>
            </div>
        </div>
    </div>
</section>);

export default Products;