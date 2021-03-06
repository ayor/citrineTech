import React from "react";
import Image from 'next/image';
// import Styles from '../../styles/Products.module.css'

const ManagedService = (props) => {
    return (<div className="row border-top  p-5 ">
        <div className="col p-3">
            <h3 className="display-5">Managed IT Services</h3>
            <div className="d-flex">
                <div>
                    <p className="">The Citrine Technologies Managed IT Services program provides affordable proactive IT management,
                    monitoring and support to growing businesses at a fixed monthly fee. Utilizing our unique framework for providing managed IT services,
                    Citrine Technologies provides a range of proactive services to keep your computer systems,
                 IT infrastructure up and running and your people and business productive. </p>
                    <h4 className='h4'>Features of Our Managed Services</h4>
                    <p className="">With all of the cloud-based applications and big data stressing your network, how proactive are you today in ensuring maximum network performance and uptime?</p>
                    <div>

                        <ul className="list list-unstyled p-2">
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Proactive problem notification regarding network performance and health</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">A scalable, flexible staffing solution to your network monitoring needs</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">7x24x365 network monitoring expertise</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Customer access to network reporting</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Extensive dashboard that provides instant visibility to network status</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Comprehensive support offerings</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Accelerated problem detection and resolution of supported devices, including updating configurations and software or making hardware changes</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">A designated Service Manager to manage problem resolution support</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Quarterly service reviews to discuss the status of network performance and health vulnerabilities and suggested improvements</span></li>
                        </ul>
                        {/* <Image src="https://citrinetechltd.com/wp-content/uploads/2018/01/mab.png" 
            width="400"
            height="150"
            className="img img-fluid"
            alt="Managed IT Services"
            loading="lazy" /> */}
                    </div>
                </div>
                <div>
                    <Image src="/img/20945391.jpg" alt="managed services"
                    width="1500" height="1500" className="img w-100 m-3 img-fluid " />

                </div>
            </div>

            {/* <h4>Why Managed Services ?</h4>
            <ul className="list list-unstyled p-2">
                <li className="m-2 text-muted">Strategic use of in-house talent on revenue-generating initiatives</li>
                <li className="m-2 text-muted">Ability to deliver on projects outside of in-house expertise</li>
                <li className="m-2 text-muted">IT staff augmentation (7??24) and rapid scalability</li>
                <li className="m-2 text-muted">Access to industry-specific expertise</li>
                <li className="m-2 text-muted">Cost savings (network monitoring, management, and maintenance)</li>
                <li className="m-2 text-muted">Better alignment between IT staffing, budget, and business needs</li>
                <li className="m-2 text-muted">Move IT spending from a capital expense to an operating expense</li>
            </ul> */}

            {/* You can have it all. Lower cost, flexible resource management and use, fast and easy remote site additions and changes.
                Also, you???ll have proactive management of your network???s performance and health resulting in increased productivity and efficiency.
<br/>Our goal is to serve as your technology partner with a focus on providing proactive solutions at a predictable monthly fee. We use a consultative approach to evaluate your business and technology needs and then advise on the best solutions for your current and future needs.
 Citrine Technologies can save your organization time and money through better use of appropriate technologies. */}
        </div>

    </div>)
}

export default ManagedService;
