import React, {Component} from 'react';
import c from './Footer.module.css'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className={c.footer}>
                <div>
                    2021
                    <Link to="https://github.com/Vicfirt">Ivan Nikitin</Link>
                    <a href="https://github.com/vicfirt">
                        <i className="fab fa-github " color="black"></i></a>
                    <a href="https://t.me/havethe"><i className="fab fa-telegram"></i></a>
                </div>
            </footer>
        );
    }
}

export default Footer;