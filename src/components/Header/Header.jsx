import React, {Component} from 'react';
import {Link} from "react-router-dom";
import c from './Header.module.css';
import {connect} from "react-redux";
import {logout} from '../../actions/auth_actions'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    doLogout = () => {
        this.props.logout();
    }

    render() {
        let signOutLink;
        let profileLink = null;
        let links
        let cartLink =  <Link className="nav-link" to={"/cart"}>
            <FontAwesomeIcon className="mr-3" size="lg"  icon={faShoppingCart}/>
            <h5 className="d-inline"
                style={{position: "relative", right: "15px", bottom: "8px"}}>
                <span className="badge badge-success">1</span>
            </h5>
        </Link>
        if (localStorage.getItem("isLoggedIn") || this.props.isLoggedIn) {
            signOutLink = (
                <Link className="nav-kink" to={"/"} onClick={this.doLogout}>
                    <button className="btn btn-primary mr-3 sm-2" style={{color: "white"}}>
                        <FontAwesomeIcon className="mr-2" icon={faSignOutAlt}/>Log out
                    </button>
                </Link>
            );
            if (localStorage.getItem("userRole") === "CUSTOMER") {
                links = (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/catalog"} className="nav-link waves-effect text-primary">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/customer/orders"} className="nav-link waves-effect">My Orders</Link>
                            </li>
                        </ul>
                );
                profileLink = (
                    <Link className="nav-link" to={"/profile"} >
                        <button className="btn btn-primary mr-3 sm-2">
                            <FontAwesomeIcon  className="mr-1" size="lg" icon={faUser} />
                        </button>
                    </Link>

                )
            }
            else {
                links = (
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/catalog"} className="nav-link waves-effect">Edit products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/orders"} className="nav-link waves-effect">All orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/signup"} className="nav-link waves-effect">Add product</Link>
                        </li>
                    </ul>
                );
                cartLink = null;
            }
        }

         else {
            signOutLink = null;
            links = (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/catalog"} className="nav-link waves-effect text-primary">Catalog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link waves-effect">Log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/signup"} className="nav-link waves-effect">Sign up</Link>
                    </li>
                </ul>
            )
        }

        return (

                <nav className="navbar navbar-expand-lg navbar-light white scrolling-navbar bg-dark">
                    <div className="container">
                        <Link href="/" className="navbar-brand waves-effect">
                            <strong className="blue-text">Online Shop</strong>
                        </Link>
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarContent"
                                aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            {links}
                            <form className="form-inline my-2 my-lg-0" method="get" action="/catalog/name/"
                                  styles="margin-right: 150px">
                                <input type="text" name="productName" className="form-control mr-sm-2"
                                       placeholder="Search"
                                       aria-label="Search"/>
                                <button type="submit" className="btn btn-sm btn-outline-primary my-2 my-sm-0">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>

                                    {cartLink}

                                {signOutLink}

                                {profileLink}

                        </div>
                    </div>
                </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, {logout}) (Header);