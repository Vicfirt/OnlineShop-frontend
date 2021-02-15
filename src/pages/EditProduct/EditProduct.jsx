import React, {Component} from 'react';
import {connect} from "react-redux";
import {formReset, updateProduct} from "../../actions/product_actions";
import {fetchProduct, fetchCategories} from "../../actions/catalog_actions";
import {Button, Card, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

class EditProduct extends Component {

    state = {
        productId:"",
        productName: "",
        productPrice: "",
        category: "Books",
        productBrand: "",
        productModel:"",
        productWeight:"",
        productCapacity:"",
        amountInStock:"",
        productDescription:"",
        active: true,
        productImage: null,
        imgFile: null
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.formReset();
        this.props.fetchCategories();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps.product
        });
    }

    onFileChange = (event) => {
        this.setState({
            imgFile: event.target.files[0]
        });
    };

    onSubmitClick = (event) => {

        event.preventDefault();
        const{productName, productPrice, category, productBrand, productModel, productWeight, productCapacity,
            amountInStock, productDescription, active, imgFile, productId} = this.state;

        const formData = new FormData();
        formData.append("imgFile", imgFile);
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("category", category);
        formData.append("productBrand", productBrand);
        formData.append("productModel", productModel);
        formData.append("productWeight", productWeight);
        formData.append("productCapacity", productCapacity);
        formData.append("amountInStock", amountInStock);
        formData.append("productDescription", productDescription);
        formData.append("active", active);
        formData.append("productId", productId);
        this.props.updateProduct(formData);
    };


    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {

        const {productName, productPrice, category, productBrand, productModel, productWeight, productCapacity,
            amountInStock, productDescription, active, productImage, productId} = this.state;

        const {productNameError, productPriceError, productBrandError, productModelError, productWeightError, productCapacityError,
            amountInStockError, productDescriptionError} = this.props.errors

        const {categories} = this.props;

        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faEdit}/> Edit product
                            {this.props.success ? <div className="alert alert-success" role="alert">
                                Product updated successfully
                            </div> : null}

                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <img src={"http://localhost:8080/media/" + `${productImage}`}
                                         style={{width:"50px", height: "50px"}}
                                         className="rounded mb-2"/>
                                    <div className="col" style={{marginTop: "35px"}}>

                                        <input type="file"
                                               name="imgFile"
                                               onChange={this.onFileChange}/>
                                    </div>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="text" name="productName" value={productName} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Product name" isInvalid={productNameError}
                                        />
                                        <div className="invalid-feedback d-block">{productNameError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="text" name="productBrand" value={productBrand} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Brand name"/>
                                        <div className="invalid-feedback d-block">{productBrandError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="email" name="productModel" value={productModel} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Model"/>
                                        <div className="invalid-feedback d-block">{productModelError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl required autoComplete="off" type="number" name="productPrice" value={productPrice} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Price" />
                                        <div className="invalid-feedback d-block">{productPriceError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>Category</InputGroup.Text>

                                            </InputGroup.Prepend>
                                            <Form.Control as="select" className={"bg-dark text-white"} value={category} name="category" onChange={this.handleInputChange}>
                                                {categories.map((category) => {
                                                    return (
                                                        <option name={category} value={category.categoryName}>{category.categoryName}</option>
                                                    )
                                                })}
                                            </Form.Control >
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="productWeight" value={productWeight} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}  placeholder="Weight"/>
                                        <div className="invalid-feedback d-block">{productWeightError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="productCapacity" value={productCapacity} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder= "Capacity"/>
                                        <div className="invalid-feedback d-block">{productCapacityError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl as="textarea" rows={3} autoComplete="off" type="text" name="productDescription" value={productDescription} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"}  placeholder="Description"/>
                                        <div className="invalid-feedback d-block">{productDescriptionError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="amountInStock" value={amountInStock} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder= "Amount in stock" />
                                        <div className="invalid-feedback d-block">{amountInStockError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Status</InputGroup.Text>
                                        </InputGroup.Prepend >
                                        <Form.Control as="select" className={"bg-dark text-white"} name="active" value={active} onChange={this.handleInputChange}>
                                            <option  name="active" value={true} >Active</option>
                                            <option  name="active" value={false}>Inactive</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" type="button" variant="success" onClick={this.onSubmitClick}
                                    disabled={this.state.productName.length === 0 || this.state.productBrand.length === 0}>
                                <FontAwesomeIcon icon={faEdit}/> Save changes
                            </Button>{' '}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.product.errors,
    product: state.catalog.product,
    success: state.product.success,
    categories: state.catalog.categories
});

export default connect(mapStateToProps, { formReset, fetchProduct, updateProduct, fetchCategories})(EditProduct);