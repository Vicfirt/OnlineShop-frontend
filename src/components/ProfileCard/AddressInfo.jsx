import React, {Component} from 'react';

const AddressInfo = ({addressInfo}) => {

    return (
        <div className="card border border-dark bg-dark text-white" style={{height: "22rem", width: "40rem"}}>
            <div className="card-body">
                <h2 className="card-title">My address</h2>
                <p className="text-white"><strong>Country: </strong>{addressInfo.country}</p>
                <p className="text-white"><strong>City: </strong>{addressInfo.city}</p>
                <p className="text-white"><strong>Street: </strong>{addressInfo.street}</p>
                <p className="text-white"><strong>Building: </strong>{addressInfo.building}</p>
                <p className="text-white"><strong>Room: </strong>{addressInfo.room}</p>
                <p className="text-white"><strong>Postcode: </strong>{addressInfo.postcode}</p>
            </div>
        </div>
    )
}

export default AddressInfo;
