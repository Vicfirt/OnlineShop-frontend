import React, {Component} from 'react';
import {connect} from "react-redux";
import {addOrder, fetchOrder} from "../../actions/order_actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faShoppingBag,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import {Spinner} from "react-bootstrap";
import Receipt from '../../components/Receipt/Receipt'

class Order extends Component {
    state = {
        customerFirstName: "",
        customerLastName: "",
        customerEmail: "",
        country: "",
        city: "",
        street: "",
        postcode: "",
        building: "",
        room: "",
        paymentMethod: "",
        shippingType: "",
        status: "In progress"
    }

    componentDidMount() {
        this.props.fetchOrder();
    }

    onSubmitClick = (event) => {
        event.preventDefault();
        const productInformation =  Object.fromEntries(new Map(JSON.parse(localStorage.getItem("products"))));
        const {customerFirstName, customerLastName, customerEmail, country, city, street, postcode, building,
            room, paymentMethod, shippingType, status  } = this.state;
        const total = this.props.totalPrice;
        const orderData = {customerFirstName, customerLastName, customerEmail, country, city, street, postcode, building,
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
        const {customerFirstName, customerLastName, customerEmail, country, city, street, postcode, building,
            room, paymentMethod, shippingType} = this.state;

       if (justAddedOrder){
           return (
               <Receipt orders={justAddedOrder}></Receipt>
           )
       }


        return (

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
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Email address:</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="customerEmail"
                                                value={customerEmail}
                                                onChange={this.handleInputChange}/>
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
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Payment method:</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="paymentMethod"
                                                value={paymentMethod}
                                                onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Shipping Type:</label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="shippingType"
                                                value={shippingType}
                                                onChange={this.handleInputChange}/>
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
                                                                <h6><span>Price: $ {product.productPrice}</span>.00</h6>
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

                        </div>}
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
    justAddedOrder: state.order.justAddedOrder
})

export default connect(mapStateToProps, {addOrder, fetchOrder})(Order)

