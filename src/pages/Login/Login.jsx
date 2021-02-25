import React, {Component} from 'react';
import {connect} from "react-redux";
import {login, formReset} from '../../actions/auth_actions'
import {Redirect} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Card, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {faSignInAlt, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {

    state = {
        username: "",
        password: ""
    };

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
            <div align="center">
                <Col className="col-4">
                    {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
                    {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="email" name="username"
                                                     value={username} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Email Address"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="password"
                                                     value={password} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter Password"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"text-align": "right"}}>
                            <Button size="sm" type="button" variant="success" onClick={this.onClickSignIn}
                                    disabled={this.state.username.length === 0 || this.state.password.length === 0}>
                                <FontAwesomeIcon icon={faSignInAlt}/> Login
                            </Button>{' '}
                        </Card.Footer>
                    </Card>
                </Col>
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


