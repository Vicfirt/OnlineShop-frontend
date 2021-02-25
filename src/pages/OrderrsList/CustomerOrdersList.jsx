import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCustomerOrders, fetchOrderById} from "../../actions/order_actions";
import OrdersList from "../../components/OrdersList/OrdersList";
import Receipt from "../../components/Receipt/Receipt";

class CustomerOrdersList extends Component {

    componentDidMount() {
        this.props.fetchCustomerOrders();
    }

    showOrderInfo = (orderId) => {
        this.props.fetchOrderById(orderId);
    }

    render() {

        return (
            <div>
                {this.props.order.length !== 0 ?
                    <Receipt order={this.props.order} backToOrders={this.props.fetchCustomerOrders}/> :
                    <OrdersList orders={this.props.orders} showOrderInfo={this.showOrderInfo}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.order.orders,
    order: state.order.order
})

export default connect(mapStateToProps, {fetchCustomerOrders, fetchOrderById})(CustomerOrdersList)