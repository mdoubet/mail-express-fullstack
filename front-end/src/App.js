import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routing from './config/Routing'
import ProductPage from './pages/ProductPage'

export default class extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <Routing/>
                    <ProductPage/>
                </MuiThemeProvider>
            </Router>
        );
    }
}