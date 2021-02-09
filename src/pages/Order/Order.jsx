import React, {Component} from 'react';
import {connect} from "react-redux";
import {addOrder, fetchOrder, fetchCustomerOrders} from "../../actions/order_actions";
import {fetchCustomerInfo} from "../../actions/profile_actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Spinner} from "react-bootstrap";
import Receipt from '../../components/Receipt/Receipt'

class Order extends Component {
    state = {
        customerFirstName: "",
        customerLastName: "",
        customerEmailAddress: "",
        country: "",
        city: "",
        street: "",
        postcode: "",
        building: "",
        room: "",
        paymentMethod: "Card",
        shippingType: "Courier",
        status: "In progress"
    }

    componentDidMount() {
        this.props.fetchCustomerInfo();
        this.setState(this.props.customer);
        this.props.fetchOrder();
    }

    onSubmitClick = (event) => {
        event.preventDefault();
        const productInformation =  Object.fromEntries(new Map(JSON.parse(localStorage.getItem("products"))));
        const {customerFirstName, customerLastName, customerEmailAddress, country, city, street, postcode, building,
            room, paymentMethod, shippingType, status  } = this.state;
        const total = this.props.totalPrice;
        const orderData = {customerFirstName, customerLastName, customerEmailAddress, country, city, street, postcode, building,
            room, paymentMethod, shippingType, status, total, productInformation};
        this.props.addOrder(orderData);
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        const productsInCart = new Map(JSON.parse(localStorage.getItem("products")));
        const {products, totalPrice, loading, justAddedOrder} = this.props;
        const {customerFirstName, customerLastName, customerEmailAddress, country, city, street, postcode, building,
            room, paymentMethod, shippingType} = this.state;

        const {customerFirstNameError, customerLastNameError, customerEmailAddressError, countryError, cityError,
            streetError, postcodeError, buildingError,
            roomError} = this.props.errors;

        return (
            <div>
                {justAddedOrder.length !==0 ? <Receipt order={justAddedOrder}></Receipt> :
                    <div className="container mt-5 pb-5">
                        {loading ? <Spinner animation="border" variant="primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner> :
                            <div>
                                <div>
                                    <h4 className="mb-4 text-center">
                                        <FontAwesomeIcon className="mr-2" icon={faShoppingBag}/> Confirmation
                                    </h4>
                                    <br/>
                                    <form onSubmit={this.onSubmitClick}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">First Name:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="customerFirstName"
                                                            value={customerFirstName}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{customerFirstNameError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Last Name:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="customerLastName"
                                                            value={customerLastName}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{customerLastNameError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Email address:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="customerEmailAddress"
                                                            value={customerEmailAddress}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{customerEmailAddressError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Country:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="country"
                                                            value={country}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{countryError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">City:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="city"
                                                            value={city}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{cityError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Street:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="street"
                                                            value={street}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{streetError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Postcode:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="postcode"
                                                            value={postcode}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{postcodeError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Building:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="building"
                                                            value={building}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{buildingError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Room:</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="room"
                                                            value={room}
                                                            onChange={this.handleInputChange}/>
                                                        <div className="invalid-feedback d-block">{roomError}</div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Payment method:</label>
                                                    <div className="col-sm-8">
                                                        <select
                                                            className="form-control"
                                                            name="paymentMethod"
                                                            value={paymentMethod}
                                                            onChange={this.handleInputChange}>
                                                            <option value="Card" name={paymentMethod}>Card</option>
                                                            <option value="Cash" name={paymentMethod}>Cash</option>
                                                            <option value="Online" name={paymentMethod}>Online</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Shipping Type:</label>
                                                    <div className="col-sm-8">
                                                        <select
                                                            value={shippingType}
                                                            name="shippingType"
                                                            className="form-control"
                                                            onChange={this.handleInputChange}>
                                                            <option value="Courier" name={shippingType}>Courier</option>
                                                            <option value="Pick up" name={shippingType}>Pick up</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        {products.map((product) => {
                                                            return (
                                                                <div key={product.productId}
                                                                     className="col-lg-6 d-flex align-items-stretch">
                                                                    <div className="card mb-5">
                                                                        <img src=""
                                                                             className="rounded mx-auto w-50"/>
                                                                        <div className="card-body text-center">
                                                                            <h5>{product.productBrand}</h5>
                                                                            <h6>{product.productName}</h6>
                                                                            <h6>
                                                                                <span>Price: $ {product.productPrice}</span>.00
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Quantity: {productsInCart.get(product.productId)}</span>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                        className="btn btn-primary btn-lg btn-success px-5 float-right">
                                                    <FontAwesomeIcon icon={faCheckCircle}/> Confirm order
                                                </button>
                                                <div className="row">
                                                    <h4>Total : $ <span>{totalPrice}</span>.00</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.cart.products,
    totalPrice: state.cart.totalPrice,
    errors: state.order.errors,
    loading: state.order.loading,
    justAddedOrder: state.order.justAddedOrder,
    customer: state.profile.customer
})

export default connect(mapStateToProps, {addOrder, fetchOrder, fetchCustomerInfo, fetchCustomerOrders})(Order)

