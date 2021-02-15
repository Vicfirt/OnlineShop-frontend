import React from 'react';
import {Form, Button} from 'react-bootstrap'
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'

const CatalogNavbar = ({
                           categories, range, handleChange, brands, handleBrandSelect,
                           handleCategorySelect, setFilter
                       }) => {
    return (
        <div>
            <h3 className="text-muted ml-2 mt-3">Filter By</h3>

            <div className="mt-3">
                <h5>Categories</h5>
                {categories.map((category) => {
                    return (
                        <Form.Check
                            name="category"
                            value={category.categoryName}
                            onChange={handleCategorySelect}
                            inline
                            label={category.categoryName}
                        />
                    );

                })}
            </div>
            <div className="mt-3">
                <h5>Brands</h5>
                {brands.map((brand) => {
                    return (
                        <Form.Check
                            name="brand"
                            value={brand}
                            onChange={handleBrandSelect}
                            inline
                            label={brand}

                        />
                    );

                })}
            </div>
            <Button onClick={setFilter}>Set filter</Button>

            <div className="mt-3">
                <h4>Price $</h4>
                <div className="col-10">
                    <hr/>
                    <InputRange
                        draggableTrack
                        maxValue={1000}
                        minValue={0}
                        value={range}
                        onChange={value => handleChange(value)}/>
                </div>
            </div>
        </div>
    )
}

export default CatalogNavbar;
