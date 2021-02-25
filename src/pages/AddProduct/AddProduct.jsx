import React, {Component} from 'react';
import {connect} from "react-redux";
import {addProduct, formReset} from "../../actions/product_actions";
import {fetchCategories, addCategory} from "../../actions/catalog_actions";
import {Button, Card, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faUndo} from "@fortawesome/free-solid-svg-icons";

class AddProduct extends Component {

    initialState = {
        productName: "",
        productPrice: "",
        category: "Electronics",
        productBrand: "",
        productModel: "",
        productWeight: "",
        productCapacity: "",
        amountInStock: "",
        productDescription: "",
        active: true,
        imgFile: null,
        categoryName: ""
    }
    state = {...this.initialState}


    componentDidMount() {
        console.log("Mount....")
        this.props.formReset();
        this.props.fetchCategories();
    }


    onFileChange = (event) => {
        this.setState({
            imgFile: event.target.files[0]
        });
    };

    onSubmitClick = (event) => {
        event.preventDefault();

        const {
            productName, productPrice, category, productBrand, productModel, productWeight, productCapacity,
            amountInStock, productDescription, active, imgFile
        } = this.state;

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


        this.props.addProduct(formData)
            .then(() => {
                if (this.props.success) {
                    this.setState({
                        ...this.initialState
                    })
                }
            });
    };

    resetForm = () => {
        this.setState(() => this.initialState);
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    addCategory = (event) => {
        event.preventDefault();
        const {categoryName} = this.state;
        const data = {categoryName}
        this.props.addCategory(data);
    }


    render() {

        const {
            productName, productPrice, category, productBrand, productModel, productWeight, productCapacity,
            amountInStock, productDescription, active, categoryName
        } = this.state;

        const {
            productNameError, productPriceError, productBrandError, productModelError, productWeightError, productCapacityError,
            amountInStockError, productDescriptionError
        } = this.props.errors

        const {categories} = this.props;

        const {categoryNameError} = this.props.categoryError;


        return (
            <Row className="justify-content-md-center">

                <Col xs={5}>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faPlusSquare}/> Add product
                            {this.props.success ? <div className="alert alert-success" role="alert">
                                Product added successfully
                            </div> : null}
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
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
                                        <FormControl autoComplete="off" type="text" name="productName"
                                                     value={productName} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Product name"
                                                     isInvalid={productNameError}
                                        />
                                        <div className="invalid-feedback d-block">{productNameError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="text" name="productBrand"
                                                     value={productBrand} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Brand name"/>
                                        <div className="invalid-feedback d-block">{productBrandError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="email" name="productModel"
                                                     value={productModel} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Model"/>
                                        <div className="invalid-feedback d-block">{productModelError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl required autoComplete="off" type="number" name="productPrice"
                                                     value={productPrice} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Price"/>
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
                                        <Form.Control as="select" className={"bg-dark text-white"} value={category}
                                                      name="category" onChange={this.handleInputChange}>
                                            {categories.map((category) => {
                                                return (
                                                    <option name={category}
                                                            value={category.categoryName}>{category.categoryName}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl className={"bg-dark text-white"} value={categoryName}
                                                     name="categoryName" onChange={this.handleInputChange}
                                                     placeholder="Create new category"/>
                                        <InputGroup.Append>
                                            <Button variant="secondary" size="sm"
                                                    onClick={this.addCategory}>Add</Button>
                                        </InputGroup.Append>
                                        <div className="invalid-feedback d-block">{categoryNameError}</div>
                                    </InputGroup>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="productWeight"
                                                     value={productWeight} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Weight"/>
                                        <div className="invalid-feedback d-block">{productWeightError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="productCapacity"
                                                     value={productCapacity} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Capacity"/>
                                        <div className="invalid-feedback d-block">{productCapacityError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl as="textarea" rows={3} autoComplete="off" type="text"
                                                     name="productDescription" value={productDescription}
                                                     onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Description"/>
                                        <div className="invalid-feedback d-block">{productDescriptionError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <FormControl autoComplete="off" type="number" name="amountInStock"
                                                     value={amountInStock} onChange={this.handleInputChange}
                                                     className={"bg-dark text-white"} placeholder="Amount in stock"/>
                                        <div className="invalid-feedback d-block">{amountInStockError}</div>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Status</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" className={"bg-dark text-white"} name="active"
                                                      value={active} onChange={this.handleInputChange}>
                                            <option name="active" value={true}>Active</option>
                                            <option name="active" value={false}>Inactive</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign": "right"}}>
                            <Button size="sm" type="button" variant="success" onClick={this.onSubmitClick}
                                    disabled={this.state.productName.length === 0 || this.state.productBrand.length === 0}>
                                <FontAwesomeIcon icon={faPlusSquare}/> Add product
                            </Button>{' '}
                            <Button size="sm" type="button" variant="info" onClick={this.resetForm}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    success: state.product.success,
    errors: state.product.errors,
    categories: state.catalog.categories,
    categoryError: state.catalog.errors
});

export default connect(mapStateToProps, {addProduct, formReset, fetchCategories, addCategory})(AddProduct);