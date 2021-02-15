import React from "react";
import {faCartPlus, faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link} from "react-router-dom";

const ProductCard = ({product, addToCart, deleteProduct, showInfo}) => {

    return (
        <a style={{ cursor: 'pointer' }} onClick={() => showInfo(product.productId)}>
        <div className="card mb-2 mt-3 mr-2" style={{height: "250px", width: "180px"}}>
            <LazyLoadImage
                effect="blur"
                className="d-block mx-auto"
                style={{width: "110px", height: "110px"}}
                src={"http://localhost:8080/media/" + `${product.productImage}`}/>
            <div className="card-body text-center">
                <h6>{product.productBrand} {product.productName}</h6>
                <h6><span>${product.productPrice}</span></h6>
            </div>
            <div className="text-center align-items-end mb-1">
                {localStorage.getItem("userRole") === "ADMIN" ?
                    <div className="btn-group">
                        <button className="btn btn-danger" onClick={() => deleteProduct(product.productId)}>
                        <FontAwesomeIcon className="mr-6" size="lg"   icon={faTrash}/>
                        </button>
                    <Link to={"/product/edit/" + `${product.productId}`} >
                        <button className="btn btn-success">
                        <FontAwesomeIcon className="mr-6"  size="lg"   icon={faEdit}/>
                        </button>
                    </Link>
                    </div>
                : <button className="btn btn-success" onClick={() => addToCart(product.productId)}>
                    Add to cart  <FontAwesomeIcon className="mr-3"  size="mg"   icon={faCartPlus}/>
                </button>}
            </div>
        </div>
        </a>

    )
}

export default ProductCard;