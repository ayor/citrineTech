import React from "react";
import Link from 'next/link'
import footerStyles from '../../styles/Footer.module.css'

const Footer = () => (
    <footer className="bg-dark px-2 px-md-5">
        <div className="container-fluid">
            <div className="row text-light py-4">
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">About Us</h5>
                    <p className="small">Citrine Technologies Ltd (Citrine) is an IT company that offers timely services
                    as
                    well as a vision for technology that will grow with your business.
                    We provide businesses with affordable and reliable IT services aimed at addressing
                    Protection,
                            Preparedness, and Productivity.</p>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">Visit Us</h5>
                    <ul className="list-unstyled">
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-home mr-2"></i> <span>14, Gbelegbo Street
                                    Magodo, Lagos State.</span>
                                    </span>
                        </li>
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-phone mr-2"></i> <span>01-2292700</span></span>
                        </li>
                        <li className="m-2">
                            <span className={footerStyles.footerLink}> <i className="fa fa-mobile mr-2"></i> <span>09020002155</span></span>
                        </li>
                        <li className="m-2">
                            <Link href="mailto:info@citrinetechltd.com" className="text-info">info@citrinetechltd.com</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">Managed Services</h5>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item mr-2"  src="https://www.youtube.com/embed/PLIfFgq1994" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                   
                </div>
            </div>

        </div>
    </footer>
);

export default Footer;
