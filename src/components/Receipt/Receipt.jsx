import React  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Receipt = ({order, backToOrders}) => {

    let cartLink = (
        <Link to={"/catalog"}>
            <button className="btn btn-success">
                <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> Go shopping!
            </button>
        </Link>
    );
    let backLink = null;

    if (backToOrders) {
        backLink = (<button className="btn btn-dark" onClick={() => backToOrders()}>Back to orders</button>);
    }
    if (localStorage.getItem("userRole") === "ADMIN") {
        cartLink = null;
    }
    const elements = order.orderElementList;

    return (
        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faShoppingBag}/> Thanks for order!</h4>

            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Order №</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Post code</th>
                    <th scope="col">Total, $</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="col">{order.orderId}</th>
                    <th scope="col">{order.customerFirstName + " " + order.customerLastName}</th>
                    <th scope="col">{order.postcode}</th>
                    <th scope="col">{order.total}</th>
                    <th scope="col">{order.date}</th>
                    <th scope="col">{order.status}</th>
                </tr>
                </tbody>
            </table>
            <h4>Products in order:</h4>
            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>

                </thead>
                <tbody>
                {elements.map((element) => {
                    return (
                        <tr>
                            <th scope="col">{element.product.productName}</th>
                            <th scope="col">{element.product.productBrand}</th>
                            <th scope="col">{element.product.productModel}</th>
                            <th scope="col">{element.elementPrice}</th>
                            <th scope="col">{element.quantityInOrder}</th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {cartLink}

            {backLink}
        </div>
    )
}

export default Receipt;