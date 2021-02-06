import React, {Component} from 'react';
import {Link} from "react-router-dom";
import c from './Header.module.css';
import {connect} from "react-redux";
import {logout} from '../../actions/auth_actions'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    doLogout = () => {
        this.props.logout();
    }

    render() {
        let signOutLink;
        if (localStorage.getItem("isLoggedIn") || this.props.isLoggedIn) {
            signOutLink = (
                <Link to={"/"} onClick={this.doLogout}>
                    <button className="btn btn-dark mr-3 sm-2" style={{color: "white"}}>
                        <FontAwesomeIcon className="mr-2" icon={faSignOutAlt}/>Log out
                    </button>
                </Link>
            );
        } else {
            signOutLink = null;
        }

        return (
            <header className={c.header}>
                <nav className="navbar navbar-expand-lg navbar-light white scrolling-navbar">
                    <div className="container">
                        <a href="/" className="navbar-brand waves-effect">
                            <strong className="blue-text">Online Shop</strong>
                        </a>
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarContent"
                                aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/catalog"} className="nav-link waves-effect">Catalog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link waves-effect">Log in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/signup"} className="nav-link waves-effect">Sign up</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0" method="get" action="/catalog/name/"
                                  styles="margin-right: 150px">
                                <input type="text" name="productName" className="form-control mr-sm-2"
                                       placeholder="Search"
                                       aria-label="Search"/>
                                <button type="submit" className="btn btn-sm btn-outline-primary my-2 my-sm-0">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/cart"}>
                                        <FontAwesomeIcon className="mr-3" icon={faShoppingCart}/>
                                        <h5 className="d-inline"
                                            style={{position: "relative", right: "15px", bottom: "8px"}}>
                                            <span className="badge badge-success">1</span>
                                        </h5>
                                    </Link>
                                </li>
                                {signOutLink}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, {logout}) (Header);