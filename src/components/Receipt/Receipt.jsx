import React, {Component} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";


const Receipt = ({orders}) => {

    return (
        <div>
            {orders.map((order) => {
                return (
        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faShoppingBag}/> Thanks for order!</h4>

            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Order №</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Address</th>
                    <th scope="col">Post index</th>
                    <th scope="col">Total, $</th>
                    <th scope="col">Date</th>
                </tr>
                </thead>
                <tbody>
                        <tr key={order.id}>
                            <th>{order.customerFirstName + " " + order.customerLastName}</th>
                            <th>{order.country + "," +order.city + "," + order.street + "st. , building: " + order.building + "room: " + order.room}</th>
                            <th>{order.postcode}</th>
                            <th>{order.total}</th>
                            <th>{order.date}</th>
                        </tr>
                </tbody>

            </table>
        </div>
                    )})}

        </div>
    )


}

export default Receipt;