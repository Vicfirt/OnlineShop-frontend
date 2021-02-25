import ProductCard from "../ProductCard/ProductCard";
import React from 'react';
import PaginationBar from "../Pagination/PaginationBar";
import SetPagination from "../Pagination/SetPagination";


const ProductCards = ({items, cardsPerPage, startFrom, addToCart, deleteProduct, showInfo, lowPrice, maxPrice}) => {
    const {slicedData, pagination, prevPage, nextPage, changePage} = SetPagination({
        cardsPerPage, items, startFrom
    });

    return (
        <div>
            <div className="row">
                {slicedData.filter((product) => product.productPrice > lowPrice && product.productPrice < maxPrice).map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                            deleteProduct={deleteProduct}
                            showInfo={showInfo}
                        />
                    )
                })}
            </div>
            <div className="row">
                <PaginationBar
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </div>
        </div>
    )
}

export default ProductCards;