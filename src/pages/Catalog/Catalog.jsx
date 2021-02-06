import React, {Component} from 'react';
import {Card, CardColumns, Container, Row, Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchProducts} from "../../actions/catalog_actions";
import CatalogNavbar from "../../components/CatalogNavbar/CatalogNavbar";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Catalog extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    addToCart = (productId) => {
        let data = localStorage.getItem("products");
        let cart = data ?  new Map(JSON.parse(data)) : new Map();
        if (cart.has(productId)) {
            cart.set(productId, cart.get(productId) + 1);
        }
        else{
            cart.set(productId, 1);
        }
        localStorage.setItem("products", JSON.stringify(Array.from(cart.entries())));
    }

    render() {
        const showCards = this.props.products.map((product) =>
            <Card style={{width: '180px', height: '250px'}} className="mt-2 mr-2">
                <Card.Img style={{width: '150px', height: '150px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2futQt439gikWTK6knY1kFH2osmotJp_ZQ&usqp=CAU"/>
                <Card.Body>
                    <Card.Text>
                        <h6>{product.productName}</h6>
                        <h6>{product.productPrice}</h6>
                    </Card.Text>
                    <button type="submit"
                            className="btn btn-success"
                            onClick={() => this.addToCart(product.productId)}>
                        <FontAwesomeIcon className="mr-2 fa-lg" icon={faCartPlus}/> ADD TO CART
                    </button>
                </Card.Body>
            </Card>
        );

        const {products} = this.props;

        return (

            <Container>
                <Row>
                    <Col sm={3}>
                        <CatalogNavbar/>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            {showCards}
                        </Row>
                    </Col>
                </Row>
            </Container>

        );
    }
}

const mapStateToProps = (state) => ({
    products: state.catalog.products
})
export default connect(mapStateToProps, {fetchProducts})(Catalog);
