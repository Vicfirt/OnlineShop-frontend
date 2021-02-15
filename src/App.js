import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import {Grid, Cell} from "styled-css-grid";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog"
import Footer from "./components/Footer/Footer";
import Registration from './pages/Registration/Registration';
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Profile from "./pages/Profile/Profile";
import ProfileEditForm from "./pages/Profile/ProfileEditForm";
import CustomerOrdersList from "./pages/OrderrsList/CustomerOrdersList";
import AllOrdersList from "./pages/OrderrsList/AllOrdersList";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import  "./App.css";


const App = () => {

    const isAdmin  = localStorage.getItem("userRole") === "ADMIN";

        return (
            <div className="page-container">
                <div className="content-wrap">
            <Grid
                columns={"1fr"}
                rows={"minmax(45px, auto) 1fr"}>
                <Cell>
                    <Header/>
                </Cell>
                <Cell top={2} >
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/catalog" component={Catalog}/>
                        <Route exact path="/signup" component={Registration}/>
                        <Route exact path="/cart"  render={() => (isAdmin) ?
                            (<Route component={Home}/>): (<Route component={Cart}/>) }/>
                        <Route exact path="/order" render={() => isAdmin ?
                            (<Route component={AllOrdersList}/>) : (<Route component={Order}/>)}/>
                        <Route exact path="/profile" render={() => (isAdmin) ?
                            (<Route component={Home}/>): (<Route component={Profile}/>) }/>
                        <Route exact path="/profile/edition"  render={() => (isAdmin) ?
                            (<Route component={ProfileEditForm}/>): (<Route component={Profile}/>) }/>
                        <Route exact path="/customer/orders" render={() => (isAdmin) ?
                            (<Route component={AllOrdersList}/>): (<Route component={CustomerOrdersList}/>) }/>
                        <Route exact path="/orders"  render={() => (isAdmin) ?
                            (<Route component={AllOrdersList}/>): (<Route component={CustomerOrdersList}/>) }/>
                        <Route exact path="/product/add"  render={() => (isAdmin) ?
                            (<Route component={AddProduct}/>): (<Route component={Home}/>) }/>
                        <Route exact path="/product/edit/:productId"  render={() => (isAdmin) ?
                            (<Route component={EditProduct}/>): (<Route component={Home}/>) }/>
                        <Route path="*" component={Home}/>
                    </Switch>
                </Cell>
            </Grid>
                </div>
                <Footer/>
            </div>
        );
}

export default App;
