import React, {Component, Fragment}  from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import AddBox from 'material-ui/svg-icons/content/add-box'

import TextField from 'material-ui/TextField'


//import graphql stuffs
import gql from "graphql-tag";
import {client} from "../config/client";


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class extends Component {
    state = {
        open: false,
        model: "",
        name: "",
        nameLine1: "",
        nameLine2: "",
        imageURL: "",
        price: null,
        highlight1: "",
        highlight2: "",
        details: [],
        quantityInStock: null,
        path: ""
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleCancel = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.addToDataBase();
        this.setState({open: false});

    }

    addToDataBase = async () => {
        let temp1 = await client.mutate({
            mutation: gql`
                mutation{
                    createProduct(data:{
                        model: "${this.state.model}",
                        name: "${this.state.name}",
                        nameLine1: "${this.state.nameLine1}",
                        nameLine2: "${this.state.nameLine2}",
                        imageURL: "${this.state.imageURL}",
                        price: ${this.state.price},
                        highlight1: "${this.state.highlight1}",
                        highlight2: "${this.state.highlight2}",
                        quantityInStock: ${this.state.quantityInStock},
                        path: "${this.state.path}"

                    }){
                        name
                        highlight1
                        highlight2
                    }
                }
                
            `}).then((result) => { return result.data.createProduct } )

        await alert("Product Added: ", temp1 )
        window.location.reload()
    }
    render() {


        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleCancel}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={false}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <IconButton onClick={this.handleOpen} tooltip="Add Product">
                    <AddBox/>
                </IconButton>
                <Dialog
                    title="Add New Product to Store"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent = {true}
                >
                    <Fragment>
                        <TextField floatingLabelText="name" id="product-name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                        <TextField floatingLabelText="alt name line 1" id="name-line-1" value={this.state.nameLine1} onChange={e => this.setState({nameLine1 : e.target.value})}/>
                        <TextField floatingLabelText="alt name line 2" id="name-line-2" value={this.state.nameLine2} onChange={e => this.setState({nameLine2 : e.target.value})}/>
                        <TextField floatingLabelText="model" id="model" value={this.state.model} onChange={e => this.setState({model : e.target.value})}/>
                        <TextField floatingLabelText="price" id="price" value={this.state.price} onChange={e => this.setState({price : e.target.value})}/>
                        <TextField floatingLabelText="highlight #1" id="highlight1" value={this.state.highlight1} onChange={e => this.setState({highlight1 : e.target.value})}/>
                        <TextField floatingLabelText="highlight #2" id="highlight2" value={this.state.highlight2} onChange={e => this.setState({highlight2 : e.target.value})}/>
                        <TextField floatingLabelText="image file name" id="imageURL" value={this.state.imageURL} onChange={e => this.setState({imageURL : e.target.value})}/>
                        <TextField floatingLabelText="path" id="path" value={this.state.path} onChange={e => this.setState({path : e.target.value})}/>
                        <TextField floatingLabelText="# in stock" id="quantityInStock" value={this.state.quantityInStock} onChange={e => this.setState({quantityInStock : e.target.value})}/>
                    </Fragment>
                </Dialog>
            </div>
        );
    }
}