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
                    <div style={{maxWidth:'600px', margin:'auto'}}>
                        <MenuBar/>

                        <main style={{display: 'flex', alignContent: 'space-between', flexDirection: 'column'}}>
                            <Routing/>
                        </main>
                    </div>
                 </Router>
            </MuiThemeProvider>
        );
    }
}