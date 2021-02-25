import React, {Component} from 'react';
import {connect} from "react-redux";
import CustomerInfo from "../../components/ProfileCard/CustomerInfo";
import AddressInfo from "../../components/ProfileCard/AddressInfo";
import {fetchCustomerInfo} from "../../actions/profile_actions";

class Profile extends Component {

    componentDidMount() {
        this.props.fetchCustomerInfo();
    }

    render() {
        return (
            <div className="row">

                <div className="col">
                    <CustomerInfo customerInfo={this.props.customer}/>
                </div>

                <div className="col">
                    <AddressInfo addressInfo={this.props.customer}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    customer: state.profile.customer
})

export default connect(mapStateToProps, {fetchCustomerInfo})(Profile)