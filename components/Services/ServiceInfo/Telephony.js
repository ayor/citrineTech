import React from "react";
import Image from 'next/image';
// import Styles from '../../styles/Products.module.css'

const Telephony = (props) => {
    return (<div className="row border-top bg-dark  container text-light my-3 p-5 ">
        <div className="col p-3">
            <h3>Telephony and Communication
</h3>
            <div >
                <p>We offer a complete cost-effective telephone solution platform with an open source systems &amp; appliances addressing a wide range of call centre/contact centre solutions &amp; enterprises solutions including IVR systems, open source VoIP PBX, call centre dialler, voice dialler, voice logger, automatic call distribution, predictive dialler, hosted dialler, GSM &amp; SMS integration, VoIP call recording, customized line call recording / monitoring / tracking.</p>
                <p>Our wide range of products is the perfect companion for frequent callers demanding longer talk time.</p>
                <p>
                    <Image loading="lazy" className="img img-fluid"
                    src="https://citrinetechltd.com/wp-content/uploads/2018/01/tel.png" 
                    alt="telephony hierachy" width="206" height="194" /></p>
                <p>Our solutions help:</p>
                <ul className="list-unstyled">
                    <li className="m-2">Solving the communication issues for enterprises</li>
                    <li className="m-2">Deliver cost benefits by automating customer interaction</li>
                    <li className="m-2">Connect your employees remotely efficiently</li>
                    <li className="m-2">Manage call quality, and much more.</li>
                </ul>
                <p>We also provide support services, routed through our helpdesk suite and bounded by SLAs. Our products are both user and budget friendly giving you value for your investment.</p>
            </div>
        </div>
    </div>)
}

export default Telephony;
