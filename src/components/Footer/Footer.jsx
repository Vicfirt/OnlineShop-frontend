import React from 'react';
import c from './Footer.module.css'
import {faGithub, faFacebook, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={c.footer}>
            <div className="container">
                <div className="row">
                    <ul className="mr-auto">
                        <a href=""><FontAwesomeIcon icon={faGithub}/><span style={{color: "white"}}>  Github    </span>
                        </a>
                        <a href=""><FontAwesomeIcon icon={faFacebook}/><span
                            style={{color: "white"}}>  Facebook    </span> </a>
                        <a href=""><FontAwesomeIcon icon={faTelegram}/><span
                            style={{color: "white"}}>  Telegram    </span> </a>
                    </ul>
                    <div className="col-sm-6">
                        <h6>OnlineShop +7(999)098-34-56</h6>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Ivan Nikitin | All rights reserved |
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;