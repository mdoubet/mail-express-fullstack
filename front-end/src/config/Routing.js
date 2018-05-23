import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import StoreManagement from '../pages/StoreManagement'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/product' component={ProductPage}/>
                <Route exact path ='/admin' component={StoreManagement}/>
            </Fragment>
        );
    }
}