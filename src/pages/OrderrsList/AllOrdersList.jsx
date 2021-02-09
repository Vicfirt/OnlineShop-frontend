import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAllOrders, fetchOrderById, updateOrder} from "../../actions/order_actions";
import Receipt from "../../components/Receipt/Receipt";
import OrdersList from "../../components/OrdersList/OrdersList";

class AllOrdersList extends Component {

    componentDidMount() {
        this.props.fetchAllOrders();
    }

    showOrderInfo = (orderId) => {
        this.props.fetchOrderById(orderId);
    }

    changeOrderStatus = (orderStatus, orderId) => {
        this.props.updateOrder(orderStatus, orderId);
    }

    render() {
        return (
            <div>
                {this.props.order.length !== 0 ?
                    <Receipt order={this.props.order} backToOrders={this.props.fetchAllOrders}/> :
                    <OrdersList orders={this.props.orders} showOrderInfo={this.showOrderInfo}
                                changeOrderStatus={this.changeOrderStatus}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.order.orders,
    order: state.order.order
})

export default connect (mapStateToProps, {fetchAllOrders, fetchOrderById, updateOrder})(AllOrdersList);