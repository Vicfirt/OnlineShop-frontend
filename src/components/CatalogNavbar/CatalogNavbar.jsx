import React, {Component} from 'react';
import {Grid, Cell} from "styled-css-grid";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {Slider, Typography} from '@material-ui/core'
import {connect} from "react-redux";
import {fetchProductsByBrand, fetchProducts, fetchProductsByCategory} from "../../actions/catalog_actions";

class CatalogNavbar extends Component {

    state = {
        minValue: 0,
        maxValue: 1000
    }

    render() {

        const some = () => {

        }

        const valuetext = () => {
        }

        const filterByBrand = (brandName) => {

            this.props.fetchProductsByBrand(brandName);
        }

        const brandNames = this.props.products.map((product) =>

            <Dropdown.Item onSelect={() => filterByBrand(product.productBrand)}>{product.productBrand}</Dropdown.Item>
        );

        const resetFilter = () => {
            this.props.fetchProducts();
        }

        const filterByCategory = (categoryId) => {
            this.props.fetchProductsByCategory(categoryId);
        }

        return (
            <Grid
                columns={"1fr"}
                rows={"50px 200px 40px"}>
                <Cell>
                    <h3 className="text-muted ml-2">Filter By</h3>
                </Cell>
                <Cell>
                    <div>
                        <DropdownButton
                            title="Category"
                            drop="right">
                            <Dropdown.Item onSelect={() => resetFilter()}>All categories</Dropdown.Item>
                            <Dropdown.Item onSelect={() => filterByCategory(0)}>Books</Dropdown.Item>
                            <Dropdown.Item onSelect={() => filterByCategory(1)}>Electronics</Dropdown.Item>
                            <Dropdown.Item onSelect={() => filterByCategory(2)}>Clothes</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <DropdownButton
                            title="Brand"
                            drop="right">
                            <Dropdown.Item onSelect={() => resetFilter()}>All brands</Dropdown.Item>
                            {brandNames}
                        </DropdownButton>
                    </div>
                </Cell>
                <Cell>
                    <Typography id="range-slider" gutterBottom>
                        Price range
                    </Typography>
                    <Slider
                        value={50}
                        onChange={some()}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext()}/>
                </Cell>
            </Grid>


        )
    }
}

const mapStateToProps = (state) => ({
    products: state.catalog.products

})

export default connect(mapStateToProps, {fetchProductsByBrand, fetchProducts, fetchProductsByCategory})(CatalogNavbar);
