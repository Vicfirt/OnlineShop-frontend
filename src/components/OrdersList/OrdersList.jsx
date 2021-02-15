import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Component} from 'react';
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {Dropdown, DropdownButton} from "react-bootstrap";

const OrdersList = ({orders, showOrderInfo, changeOrderStatus}) => {

    return (

        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faShoppingBag}/> List of all orders</h4>
            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Order №</th>
                    <th scope="col">Customer email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Postcode</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total $</th>
                    <th scope="col">Details</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => {

                    let statusField = (<th scope="col">{order.status}</th>);

                    if(localStorage.getItem("userRole") === "ADMIN"){
                        statusField = (
                            <th scope="col">
                            <DropdownButton title={order.status} drop="down">
                            <Dropdown.Item onSelect={() => changeOrderStatus("During delivery", order.orderId)}>During delivery</Dropdown.Item>
                            <Dropdown.Item onSelect={() => changeOrderStatus("Delivered", order.orderId)}>Delivered</Dropdown.Item>
                            <Dropdown.Item onSelect={() => changeOrderStatus("Rejected", order.orderId)}>Rejected</Dropdown.Item>
                        </DropdownButton>
                            </th>)
                    }

                    return (
                        <tr key={order.id}>
                            <th scope="col">{order.orderId}</th>
                            <th scope="col">{order.customerEmailAddress}</th>
                            <th scope="col">{order.date}</th>
                            <th scope="col">{order.customerFirstName + " " + order.customerLastName}</th>
                            <th scope="col">{order.postcode}</th>
                            {statusField}
                            <th scope="col">{order.total}</th>
                            <th scope="col">
                                <button className="btn btn-success" onClick={() => showOrderInfo(order.orderId)}>Show</button>
                            </th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    )
}

export default OrdersList;