import React from 'react';
import {Link} from "react-router-dom";

const CustomerInfo = ({customerInfo}) => {


    return(

        <div className="card border border-dark bg-dark text-white" style={{height: "22rem", marginLeft: "15px"}}>
            <div className="card-body">
                <h2 className="card-title">{customerInfo.customerFirstName + " " + customerInfo.customerLastName}</h2>
                <p className="text-white"><strong>Date of birth: </strong>{customerInfo.customerDateOfBirth}</p>
                <p className="text-white"><strong>Email address: </strong>{customerInfo.customerEmailAddress}</p>
                <p className="text-white"><strong>Phone number: </strong>{customerInfo.phoneNumber}</p>
                <Link to={"/profile/edition"}>
                    <button className="btn btn-success">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CustomerInfo;