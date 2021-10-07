import Link from 'next/link';
import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


const SocialMediaLinks = props => (
    <div style={{
        position: 'sticky',
        top: '45%',
        left: "0"
    }}>
        <ul className="list list-unstyled">
            <li className="list-item" style={{
                padding: "5px",
            }}>
                <Link href="https://www.facebook.com/citrinetech" passHref>
                    <a target="_blank">
                        <Facebook color="primary" />
                    </a>
                </Link>
            </li>
            <li className="list-item" style={{
                padding: "5px",
            }}>
                <Link href="https://twitter.com/citrinetech" passHref>
                <a target="_blank">
                        <Twitter style={{ color: "#00b0ff" }} />
                    </a>
                </Link>
            </li>
            <li className="list-item" style={{
                padding: "5px",
            }}>
                <Link href="https://www.instagram.com/citrinetech/?hl=en" passHref>
                <a target="_blank">
                        <Instagram color="secondary" />
                    </a>
                </Link>
            </li>
            <li className="list-item" style={{
                padding: "5px",
            }}>
                <Link href="https://www.linkedin.com/company/citrineltd">
                <a target="_blank">
                        <LinkedIn color="primary" />
                    </a>
                </Link>
            </li>
        </ul>
    </div>
);

export default SocialMediaLinks;