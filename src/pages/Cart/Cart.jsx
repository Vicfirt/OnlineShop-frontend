import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCart, stopCartLoading, calculateCartPrice} from '../../actions/cart_actions';
import {Spinner} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {
    faChevronDown,
    faChevronUp,
    faMinusSquare,
    faShoppingBag,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Cart extends Component {

    state = {
        productsInCart: new Map()
    };

    componentDidMount() {
        let products =  new Map(JSON.parse(localStorage.getItem("products")));

        if (products !== null) {
            this.props.fetchCart(Array.from(products.keys()));

            products.forEach((value, key) => {
                this.setState({
                    productsInCart: this.state.productsInCart.set(key, value)
                });
            });
        } else {
            this.props.stopCartLoading();
        }
    }

    deleteProductFromCart = (productId) => {
        const {productsInCart} = this.state;
        productsInCart.delete(productId);

        if (productsInCart.size === 0) {
            localStorage.removeItem("products");
            this.setState({
                productsInCart: new Map()
            })
        } else {
            localStorage.setItem("products", JSON.stringify(Array.from(productsInCart.entries())));
        }
        this.props.fetchCart(Array.from(productsInCart.keys()));
    }

    handleInputChange = (event) => {
        const {productsInCart} = this.state;

        if (isNaN(parseInt(event.target.value))) {
            this.setState({
                productsInCart: productsInCart.set(parseInt(event.target.id), 1)
            });
                localStorage.setItem("products", JSON.stringify(Array.from(productsInCart.entries())));
        } else {
            this.setState({
                productsInCart: productsInCart.set(parseInt(event.target.id), parseInt(event.target.value))
            });
            localStorage.setItem("products", JSON.stringify(Array.from(productsInCart.entries())));
        }
        this.props.calculateCartPrice(this.props.products);
    }

    onDecrease = (productId) => {
        const {productsInCart} = this.state;

        this.setState({
            productsInCart: productsInCart.set(productId, productsInCart.get(productId) - 1)
        });
        localStorage.setItem("products", JSON.stringify(Array.from(productsInCart.entries())));
        this.props.calculateCartPrice(this.props.products)
    }

    onIncrease = (productId) => {
        const {productsInCart} = this.state;

        this.setState({
            productsInCart: productsInCart.set(productId, productsInCart.get(productId) + 1)
        });
        localStorage.setItem("products", JSON.stringify(Array.from(productsInCart.entries())));
        this.props.calculateCartPrice(this.props.products)
    }

    render() {
        const {products, isLoading, totalPrice} = this.props;
        const {productsInCart} = this.state;
        return (
            <div className="container mt-5 pb-5">
                {isLoading ? <Spinner animation="border" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> :
                    <div>
                        {products.length === 0 ?
                            <div style={{textAlign: "center"}}>
                                <h2>Cart is empty</h2>
                            </div> :
                            <div>
                                <p className="h4 mb-4 text-center">
                                    <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> Cart
                                </p>
                                {products.map((product) => {
                                    return (
                                        <div key={product.productId} className="card mb-3 mx-auto"
                                             style={{maxWidth: "940px"}}>
                                            <div className="row no-gutters">
                                                <div className="col-2 ml-3 mt-3">
                                                    <img src=""
                                                         className="rounded mx-auto w-50"/>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card-body">
                                                        <h4 className="card-title">{product.productBrand + " " + product.productName}</h4>
                                                        <p className="card-text">{product.productPrice}</p>
                                                    </div>
                                                </div>
                                                <div className="col-1 mt-3">
                                                    <button className="btn btn-default"

                                                            onClick={() => this.onIncrease(product.productId)}>
                                                        <FontAwesomeIcon size="md" icon={faChevronUp}/>
                                                    </button>
                                                    <input type="text"
                                                           className="form-control input-number"
                                                           style={{width: "50px"}}
                                                           id={product.productId}
                                                           value={productsInCart.get(product.productId)}
                                                           onChange={this.handleInputChange}/>
                                                    <button className="btn btn-default"
                                                            disabled={productsInCart.get(product.productId) === 1}
                                                            onClick={() => this.onDecrease(product.productId)}>
                                                        <FontAwesomeIcon size="md" icon={faChevronDown}/>
                                                    </button>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <span>$ {product.productPrice * productsInCart.get(product.productId)}</span>
                                                        </h5>
                                                        <button className="btn btn-warning mb-2"
                                                                onClick={() => this.deleteProductFromCart(product.productId)}>
                                                            <FontAwesomeIcon className="mr-2"
                                                                             icon={faMinusSquare}/> Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <hr className="my-3"/>
                                <div className="row">
                                    <div className="col-9">
                                        <p className="h5 text-right">Total: $ <span>{totalPrice}</span></p>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-row">
                                            <Link to={"/order"}>
                                                <button className="btn btn-success">
                                                    <FontAwesomeIcon className="mr-2" icon={faShoppingBag}/> Checkout
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.cart.products,
    totalPrice: state.cart.totalPrice,
    isLoading: state.cart.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, {fetchCart, stopCartLoading, calculateCartPrice})(Cart)