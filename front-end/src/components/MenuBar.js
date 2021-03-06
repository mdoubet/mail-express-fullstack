import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import NavigationDrawer from '../components/NavigationDrawer'

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
export default class extends Component {
    state = {
        logged: true,
        open: false
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    toggleOpen = () => {
        this.setState(() => ({open: (!this.state.open)}))
    }

    render() {
        return (
            <div>

                <AppBar
                    style = {{backgroundColor: "#1976D2"}}
                    title="Mail Express +"
                    onLeftIconButtonClick = {this.toggleOpen}
                    //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
                <NavigationDrawer open={this.state.open}
                              change={this.toggleOpen}/>
            </div>
        );
    }
}
