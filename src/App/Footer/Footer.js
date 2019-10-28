import React from 'react';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-limiter">
                    <div className="mb-4 my-2 my-sm-0">
                        <a className="footer-links " href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="footer-links" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="footer-links" href="#"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="footer-links" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <div className="footer-left">
                        <p className="footer-copyright text-center py-3">All rights</p>
                        <p className="text-center">Pet shop inc.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;