import React, {Component} from 'react';
import c from "./Login.module.css"
import {connect} from "react-redux";
import {login, formReset} from '../../actions/auth_actions'
import {Redirect} from 'react-router-dom';

class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    componentDidMount() {

    }

    onClickSignIn = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        const data = {username, password};

        this.props.login(data);
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {username, password} = this.state;
        const {error, success} = this.props;
        if (localStorage.getItem("isLoggedIn")) {
            return <Redirect to="/"/>
        }

        return (
            <div className={c.login}>
                {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
                {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
                <form onSubmit={this.onClickSignIn}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            className="form-control"
                            type="email"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <div>
                            <a className="float-right" href="/signup">Sign Up</a>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign In"/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    success: state.auth.success,
    customer: state.auth.customer
});

export default connect(mapStateToProps, {login, formReset})(Login);


