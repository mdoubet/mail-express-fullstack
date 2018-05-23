import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import MenuBar from './components/MenuBar'
import NavigationDrawer from './components/NavigationDrawer'

import Routing from './config/Routing'

export default class extends Component {

    render() {


        return (
            <MuiThemeProvider>
                <Router>
                    <Fragment>
                        <MenuBar/>

                        <main style={{display: 'flex', alignContent: 'space-between', flexDirection: 'column'}}>
                            <Routing/>
                        </main>
                    </Fragment>
                 </Router>
            </MuiThemeProvider>
        );
    }
}