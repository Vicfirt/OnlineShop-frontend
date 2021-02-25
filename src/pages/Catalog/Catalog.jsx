import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {
    fetchProducts, fetchProduct, deleteProduct, fetchCategories, fetchBrands,
    filterByParameters, fetchAvailableProducts, resetDeletionError
} from "../../actions/catalog_actions";
import CatalogNavbar from "../../components/CatalogNavbar/CatalogNavbar";
import {fetchCart} from "../../actions/cart_actions";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProductCards from "../../components/ProductCards/ProductCards";
import {Route} from "react-router-dom";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

class Catalog extends Component {


    state = {
        value: {min: 0, max: 5000},
        categories: [],
        brandsToFilter: [],
        categoriesToFilter: []
    }

    componentDidMount() {
        localStorage.getItem("userRole") === "ADMIN" ? this.props.fetchProducts() : this.props.fetchAvailableProducts();
        this.props.fetchCategories();
        this.props.fetchBrands();
    }

    handleBrandSelect = (event) => {
        let brandList = this.state.brandsToFilter;
        let check = event.target.checked;
        let checkedBrand = event.target.value;
        if (check) {
            this.setState({
                brandsToFilter: [...this.state.brandsToFilter, checkedBrand]
            })
        } else {
            let index = brandList.indexOf(checkedBrand);
            if (index > -1) {
                brandList.splice(index, 1);
                this.setState({
                    brandsToFilter: brandList
                })
            }
        }
    }

    handleCategorySelect = (event) => {
        let categoryList = this.state.categoriesToFilter;
        let check = event.target.checked;
        let checkedCategory = event.target.value;
        if (check) {
            this.setState({
                categoriesToFilter: [...this.state.categoriesToFilter, checkedCategory]
            })
        } else {
            let index = categoryList.indexOf(checkedCategory);
            if (index > -1) {
                categoryList.splice(index, 1);
                this.setState({
                    categoriesToFilter: categoryList
                })
            }
        }
    }

    addToCart = (productId) => {
        let data = localStorage.getItem("products");
        let cart = data ? new Map(JSON.parse(data)) : new Map();
        if (cart.has(productId)) {
            cart.set(productId, cart.get(productId) + 1);
        } else {
            cart.set(productId, 1);
        }
        localStorage.setItem("products", JSON.stringify(Array.from(cart.entries())));
        this.props.fetchCart(Array.from(cart.keys()));
    }

    deleteProduct = (productId) => {
        this.props.deleteProduct(productId);
        if (this.props.deletionError) {
            alert("Sorry, You can not delete product while it is in order")
            this.props.resetDeletionError();
        }
    }

    showProductInfo = (productId) => {
        this.props.fetchProduct(productId);
    }

    backToCatalog = () => {
        localStorage.getItem("userRole") === "ADMIN" ? this.props.fetchProducts() : this.props.fetchAvailableProducts();
    }

    handleChange = (value) => {
        this.setState({value: value});
    }

    setFilter = () => {
        const {brandsToFilter, categoriesToFilter} = this.state;
        const data = {brandsToFilter, categoriesToFilter}
        this.props.filterByParameters(data);
    }

    render() {
        const {products, product, categories, brands} = this.props;

        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <CatalogNavbar categories={categories} brands={brands} range={this.state.value}
                                       handleChange={this.handleChange}
                                       handleBrandSelect={this.handleBrandSelect}
                                       handleCategorySelect={this.handleCategorySelect}
                                       setFilter={this.setFilter}/>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            {product.length !== 0 ? <ProductInfo product={product} backToCatalog={this.backToCatalog}
                                                                 addToCart={this.addToCart}/> :
                                <Route exact component={() => <ProductCards items={products} cardsPerPage={8}
                                                                            addToCart={this.addToCart}
                                                                            lowPrice={this.state.value.min}
                                                                            maxPrice={this.state.value.max}
                                                                            deleteProduct={this.deleteProduct}
                                                                            showInfo={this.showProductInfo}/>}/>}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.catalog.products,
    product: state.catalog.product,
    categories: state.catalog.categories,
    brands: state.catalog.brands,
    deletionError: state.catalog.deletionError
})
export default connect(mapStateToProps, {
    fetchProducts, fetchProduct, deleteProduct, fetchCategories, fetchBrands,
    filterByParameters, fetchAvailableProducts, fetchCart, resetDeletionError
})(Catalog);
