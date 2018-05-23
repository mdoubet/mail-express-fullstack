import React, {Component, Fragment} from 'react'
import Paper from 'material-ui/Paper'

export default class extends Component {
    render() {
        return (
            <Paper zDepth={4} style={{minWidth: '250px', maxWidth: '500px', margin:'auto', padding: '12px'}}>
                <h1>Welcome</h1>
                <p>Welcome our webstore in early stages of development.
                    The current functionality is limited to the following: </p>
                <p>1) You can create, modify, or delete a product on the admin page. </p>
                <p>2) You can view products on the product page.</p>
                <p>To navigate to the Store Management page or the product page,
                    click on the hamburger menu icon in the upper left</p>
            </Paper>
        );
    }
}