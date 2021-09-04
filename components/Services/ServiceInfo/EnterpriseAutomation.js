import React from "react";
import Image from 'next/image';

const EnterpriseAutomation = (props) => {
    return (<div className="row border-top my-3 p-5 ">
        <div className="col p-3">

            <div className="d-flex">
                <div className="p-3">
                    <h3 className="display-5">Enterprise Automation</h3>
                    <div className="">
                        <p>Forward-thinking business leaders are challenging their organisations to achieve transformation by harnessing digital technologies with organisational, operational, and business innovation to create new ways of operating and growing businesses. Optimizing IT infrastructure and operational processes through automation is key to successfully achieving digital transformation.</p>
                        <p>At Citrine, we can help achieve this transformation with enterprise solution that deliver automation. We have developed, and partnered with the best tools in the market to deliver this automation.</p>
                        <p>Our team of software developers will undoubtedly help you achieve the automation that will grow your business.</p>
                        <p>Our solutions include:</p>
                        <ul className="list-unstyled">
                        <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Document Management Solution</span> </li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Print Management Solution</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Corporate Gifting Solution</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">ERP Solution</span></li>
                            <li className="m-2 "><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Hospital Management System</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src="/img/20944170.jpg" alt="automation" priority={true} width="2600" height="1800" className="img w-100 m-4 img-fluid" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnterpriseAutomation;
