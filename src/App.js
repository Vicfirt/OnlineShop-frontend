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


class App extends Component {

    render() {

        return (
            <Grid
                columns={"1fr"}
                rows={"minmax(45px, auto) 1fr minmax(45px, auto)"}>
                <Cell>
                    <Header/>
                </Cell>
                <Cell top={2} >
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/catalog" component={Catalog}/>
                        <Route exact path="/signup" component={Registration}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/order" component={Order}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/profile/edition" component={ProfileEditForm}/>
                        <Route exact path="/customer/orders" component={CustomerOrdersList}/>
                        <Route exact path="/orders" component={AllOrdersList}/>
                    </Switch>
                </Cell>
                <Cell >
                    <Footer/>
                </Cell>
            </Grid>
        );
    }
}

export default App;
