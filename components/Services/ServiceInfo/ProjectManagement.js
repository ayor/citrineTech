import React from "react";
import Image from 'next/image';

// import Styles from '../../styles/Products.module.css'

const ProjectManagement = (props) => {
    return (<div className="row border-top text-muted p-5 ">
        <div className="col p-3">

            <div className="d-flex">
                <div>
                    <Image src="/img/security.jpg" loading="lazy" width="2000" 
                    alt="Project management"
                    height="2000" className="img w-100 m-4 img-fluid" />
                </div>
                <div className="p-3">
                    <h3 className="display-5 mb-2 ">Infrastructure Security Services</h3>
                    <p>Citrine Technologies Ltd shall develop a methodology of helping you to understand your specific cyber domain, and how you can reduce the threats you face and become both cyber aware and cyber secure. Our Infrastructure Security service will provide your organization with a detailed report on your vulnerabilities and a range of recommendations to help you overcome these issues. This service will not only enable you to become cyber aware but also give you a detailed understanding of cybersecurity and the elements included within it.</p>
                    <ul className="list-unstyled">
                    <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Our Infrastructure Security service will scrutinize your organization’s existing security precautions to ensure that your internal networks are protected from external attack.</span></li>
                        <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">ur team will test for exploitable vulnerabilities in specific machines such as web, database, wireless, and other crucial servers, routers, and firewall appliances.</span></li>
                    <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Conforming to industry standards such as the Open Source Security Testing Methodology (OSSTM) and by a suite of tools, our service is designed to help your organization stay ahead of emerging threats.</span></li>
                    <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Working closely with your IT team, we will review existing risks in connection with the data integrity of the systems, such as the ability to alter or delete data, unauthorized access to resources, and workforce knowledge on information security risks.</span></li>
                    <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted">Vulnerabilities discovered will be flagged for further testing and penetration. To take this a step further, we will launch a series of authorized simulated attacks to identify possible ways in which an intruder can breach your security defenses.</span></li>
                    <li className="m-2"><i className="fa fa-check-circle text-success mr-2"></i> <span className="text-muted"> Based on the weakness discovered, a corrective measure that conforms to the best practices and approaches will be recommended to close the security gaps in your organization’s infrastructure.</span></li>

                    </ul>
                    {/* <p>We are also available in the capacity of project consultants to close the identified security gaps. The purpose of the Infrastructure Audit service is to;</p>
                    <ul className="list-unstyled">
                        <li className="m-2">Carry out a detailed gap analysis on the Infrastructure</li>
                        <li className="m-2">Undertake an exercise to determine the extent of vulnerability within the Infrastructure or Web application.</li>
                    </ul>
                    <p>Our&nbsp;Infrastructure Audit service covers:</p>
                    <ul className="list-unstyled">
                        <li className="m-2"><a href="https://citrinetechltd.com/vulnerability-assessment/">Vulnerability Assessment</a></li>
                        <li className="m-2"><a href="https://citrinetechltd.com/information-process-audit/">Information Process Audit</a></li>
                        <li className="m-2"><a href="https://citrinetechltd.com/penetration-testing/">Penetration Test</a></li>
                        <li className="m-2"><a href="https://citrinetechltd.com/gap-remediation/">Gap Remediation</a></li>
                    </ul> */}

                </div>

            </div>
        </div>
    </div>)
}

export default ProjectManagement;
