import React, {Component} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductInfo = ({product, addToCart, backToCatalog}) => {

    return (
                    <div className="container dark-grey-text mt-2">
                        <div className="row wow fadeIn">

                            <div className="col-md-6">
                                <LazyLoadImage
                                    effect="blur"
                                    className="d-block mx-auto"
                                    style={{width: "500px", height: "500px"}}
                                    src={"http://localhost:8080/media/" + `${product.productImage}`}/>

                        </div>
                        <div className="col-md-6 mb-4 mt-4">
                            <div className="p-4">
                                <div className="mb-3">

                                    <span className="badge purple mr-1">Categoty</span>

                                    <span className="badge red mr-1">Brand</span>
                                </div>

                            <p className="lead">
                            <span className="mr-1">
                               $ {product.productPrice}
                            </span>

                            </p>
                                <p>{product.productBrand} {product.productName} {product.productModel}</p>

                                <p className="lead font-weight-bold">Description:</p>
                            <p>{product.productDescription}</p>


                                <p className="lead font-weight-bold">Weight:</p>
                                <p>{product.productWeight} g.</p>


                                <p className="lead font-weight-bold"> Capacity: </p>
                                <p>{product.productCapacity} cm²</p>

                            </div>
                            <button className="btn btn-dark" onClick={() => backToCatalog()}>Back</button>
                            {localStorage.getItem("userRole") !== "ADMIN" ? <button className="btn btn-success"
                                onClick={() => addToCart(product.productId)}>Add to cart</button>
                            : null}

                        </div>
                        </div>
                    </div>
    )
}

export default ProductInfo;