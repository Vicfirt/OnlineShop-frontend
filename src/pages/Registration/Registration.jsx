import React, {Component} from 'react';
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faLock,
    faUndo,
    faUserPlus,
    faUser,
    faBirthdayCake,
    faFlag,
    faCity,
    faMapPin,
    faHome
} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {formReset, registration} from '../../actions/auth_actions'

class Registration extends Component {

    initialState = {
        customerEmailAddress: "",
        customerPassword: "",
        customerFirstName: "",
        customerLastName: "",
        customerDateOfBirth: "",
        phoneNumber: "",
        role: "CUSTOMER",
        active: true,
        country: "",
        city: "",
        postcode: "",
        street: "",
        building: "",
        room: ""
    };

    state = {...this.initialState};

    componentDidMount() {
        this.props.formReset();
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    onSignUp = (event) => {
        event.preventDefault();
        const {
            customerEmailAddress, customerPassword, customerFirstName, customerLastName, customerDateOfBirth,
            phoneNumber, active, role, country, city, postcode, street, building, room
        } = this.state;
        const data = {
            customerEmailAddress, customerPassword, customerFirstName, customerLastName, customerDateOfBirth,
            phoneNumber, active, role, country, city, postcode, street, building, room
        };

        this.props.registration(data).then(() => {
            if (this.props.isRegistered) {
                this.setState({
                    ...this.initialState
                });
            }
        });

    }

    resetRegisterForm = () => {
        this.setState(() => this.initialState);
    };

    render() {

        const {
            customerEmailAddress, customerPassword, customerFirstName, customerLastName, customerDateOfBirth,
            phoneNumber, country, city, postcode, street, building, room
        } = this.state;
        const {
            customerEmailAddressError, customerPasswordError, customerFirstNameError, customerLastNameError,
            customerDateOfBirthError, phoneNumberError, countryError, cityError, postcodeError, streetError
        } = this.props.errors;

        return (

            <Row className="justify-content-md-center">


                <Col xs={5}>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                            {this.props.isRegistered ? <div className="alert alert-success" role="alert">
                                Registration completed successfully
                            </div> : null}
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="customerFirstName"
                                                     value={customerFirstName} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter First Name" i
                                        />
                                        <div className="invalid-feedback d-block">{customerFirstNameError}</div>

                                    </InputGroup>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="customerLastName"
                                                     value={customerLastName} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter Last Name"/>
                                        <div className="invalid-feedback d-block">{customerLastNameError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="email" name="customerEmailAddress"
                                                     value={customerEmailAddress} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Email Address"/>
                                        <div className="invalid-feedback d-block">{customerEmailAddressError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faBirthdayCake}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="date" name="customerDateOfBirth"
                                                     value={customerDateOfBirth} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Date of Birth"/>
                                        <div className="invalid-feedback d-block">{customerDateOfBirthError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="customerPassword"
                                                     value={customerPassword} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter Password"/>
                                        <div className="invalid-feedback d-block">{customerPasswordError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faPhone}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="number" name="phoneNumber"
                                                     value={phoneNumber} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="(___)-___-____"/>
                                        <div className="invalid-feedback d-block">{phoneNumberError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faFlag}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="country" value={country}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter your country"/>
                                        <div className="invalid-feedback d-block">{countryError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faCity}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="city" value={city}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter your city"/>
                                        <div className="invalid-feedback d-block">{cityError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faMapPin}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="street" value={street}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter your street"/>
                                        <div className="invalid-feedback d-block">{streetError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faMapPin}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="postcode" value={postcode}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter your postcode"/>
                                        <div className="invalid-feedback d-block">{postcodeError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faHome}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="number" name="building" value={building}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter your house number"/>

                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faHome}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="number" name="room" value={room}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Enter your room"/>

                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign": "right"}}>
                            <Button size="sm" type="button" variant="success" onClick={this.onSignUp}
                                    disabled={this.state.customerEmailAddress.length === 0 || this.state.customerPassword.length === 0}>
                                <FontAwesomeIcon icon={faUserPlus}/> Register
                            </Button>{' '}
                            <Button size="sm" type="button" variant="info" onClick={this.resetRegisterForm}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.auth.errors,
    isRegistered: state.auth.isRegistered
});
export default connect(mapStateToProps, {formReset, registration})(Registration);