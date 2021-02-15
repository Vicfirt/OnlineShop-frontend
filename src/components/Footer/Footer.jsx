import React, {Component} from 'react';
import c from './Footer.module.css'

const Footer = () => {
    return (
        <div className={c.footer}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Links</h4>

                    </div>
                </div>
                <hr />
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