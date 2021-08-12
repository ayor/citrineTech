import React from "react";
import Link from 'next/link'
import footerStyles from '../../styles/Footer.module.css'

const Footer = () => (
    <footer className="bg-dark px-5">
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
                <div className="col-lg-2 col-sm-6">
                    <h5 className="pb-3">Visit Us</h5>
                    <ul className="list-unstyled">
                        <li>
                            <span className={footerStyles.footerLink}> <i className="fa fa-home"></i>14, Gbelegbo Street
                                    Magodo, Lagos State.</span>
                        </li>
                        <li>
                            <span className={footerStyles.footerLink}>01-2292700</span>
                        </li>
                        <li>
                            <span className={footerStyles.footerLink}>09020002155</span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <h5 className="pb-3">Need Help?</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link href="/" className={"text-uppercase " + footerStyles.footerLink}>Customer Service</Link>
                        </li>
                        <li>
                            <Link href="/online" className={"text-uppercase " + footerStyles.footerLink}>Online Chat</Link>
                        </li>
                        <li>
                            <Link href="/support" className={"text-uppercase " + footerStyles.footerLink}>Support</Link>
                        </li>
                        <li>
                            <Link href="mailto:info@citrinetechltd.com" className="text-info">info@citrinetechltd.com</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">Managed Services</h5>
                    <div>
                        <iframe width="350" height="263" src="https://www.youtube.com/embed/PLIfFgq1994" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/citrinetech" target="_blank"></a><i className="fa fa-facebook-square text-primary"></i></li>
                        <li className="list-inline-item"><a href="https://twitter.com/citrinetech" target="_blank"><i className="fa fa-twitter  text-info"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/citrineltd" target="_blank"><i className="fa fa-linkedin-square  text-primary"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/citrinetech/?hl=en" target="_blank"><i className="fa fa-instagram  text-warning"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCSws4FRBtxqn-tcmAYAIHgA" target="_blank"><i className="fa fa-youtube text-danger"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-light border-top pt-3">
                    <p>&copy; 2021 Copyright, All Rights Reserved</p>
                    <small > <Link href='https://www.freepik.com/vectors/technology'>
                        <a className=" my-2 text-dark">Technology
                        vector created by upklyak - www.freepik.com
                        - Photo by Alex Andrews from Pexels
                           </a>
                    </Link>
                    </small>
                    <br />
                    <small className=" my-2 text-dark">Video by Pressmaster from Pexels</small>
                </div>

            </div>
        </div>
    </footer>
);

export default Footer;
