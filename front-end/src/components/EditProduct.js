import React, {Component, Fragment} from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Create from 'material-ui/svg-icons/content/create'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import Save from 'material-ui/svg-icons/content/save'
import Close from 'material-ui/svg-icons/navigation/close'
import gql from "graphql-tag";
import {client} from "../config/client";



export default class extends Component {
    state = {expanded: false}
    render() {
        const product = this.props.product;
        let updateFields = {};
        const toggleExpanded = ()=> {
            this.setState({expanded: !this.state.expanded, update: {}})
        }

        const updateProduct = async () => {
            const dataToUpdate = () => {
                let data = '';
                for (const i in updateFields){
                    data += `${updateFields[i]}`;
                }
                console.log(data);
                return data.slice(0,-1);
            }
            const prod = await client.mutate(
                {
                    mutation: gql`
                        mutation{
                            updateProduct(data: {${await dataToUpdate()}} where:{id: "${product.id}"}){
                                name
                                price
                                }
                            }
                        `
                }
            ).then( result => result.data.product);
            console.log(prod);
        }

        const deleteProduct = async () => {
            const prod = await client.mutate(
                {
                    mutation: gql`
                        mutation{
                            deleteManyDetails(where:{product:{id:"${product.id}"}}){
                                count
                            }
                            deleteProduct(where: {id:"${product.id}"}){
                                name
                                highlight1
                                highlight2
                                price

                            }
                        }
                    `
                }
            ).then( result => result.data);
            console.log(prod.name, " has been deleted!!! with details #", prod.count );
        }
        const renderProduct = () => {
            return (
                <div style={{display: 'flex', alignContent: 'space-around', flexDirection: 'row'}}>


                    {!this.state.expanded ?
                        <Fragment>
                            <IconButton onClick={deleteProduct} tooltip = "Delete Product"><DeleteForever/></IconButton>
                            <IconButton onClick={toggleExpanded} tooltip="Edit Product"><Create/></IconButton>

                        </Fragment> :
                        <Fragment>
                            <IconButton onClick={updateProduct} tooltip="Save Changes"><Save/></IconButton>
                            <IconButton onClick={toggleExpanded} tooltip="close"><Close/></IconButton>
                        </Fragment>}
                        <h2>{product.name}</h2>
                </div>
            )
        }
        const renderTextFields =() =>{
            if(this.state.expanded) {
                return (
                    <Fragment>
                        <TextField id="product-name" floatingLabelText="name" defaultValue={product.name} onChange={e => updateFields.name = `name : "${e.target.value}",`}/>
                        <TextField id="name-line-1" floatingLabelText="alt name line 1" defaultValue={product.nameLine1} onChange={e => updateFields.nameLine1 = `nameLine1 : "${e.target.value}",`}/>
                        <TextField id="name-line-2" floatingLabelText="alt Name line 2" defaultValue={product.nameLine2} onChange={e => updateFields.nameLine2 = `nameLine2 : "${e.target.value}",`}/>
                        <TextField id="model" floatingLabelText="model" defaultValue={product.model} onChange={e => updateFields.model = `model : "${e.target.value}",`}/>
                        <TextField id="price" floatingLabelText="price" defaultValue={product.price} onChange={e => updateFields.price = `price : ${e.target.value},`}/>
                        <TextField id="highlight1" floatingLabelText="highlight #1" defaultValue={product.highlight1} onChange={e => updateFields.highlight1 = `highlight1 : "${e.target.value}",`}/>
                        <TextField id="highlight2" floatingLabelText="highlight #2" defaultValue={product.highlight2} onChange={e => updateFields.highlight2 = `highlight2 : "${e.target.value}",`}/>
                        <TextField id="imageURL" floatingLabelText="imageURL" defaultValue={product.imageURL} onChange={e => updateFields.imageURL = `imageURL : "${e.target.value}",`}/>
                        <TextField id="path" floatingLabelText="path" defaultValue={product.path} onChange={e => updateFields.path = `path : "${e.target.value}",`}/>
                        <TextField id="quantityInStock" floatingLabelText="# in stock" defaultValue={product.quantityInStock} onChange={e => updateFields.quantityInStock = `quantityInStock : "${e.target.value}",`}/>
                    </Fragment>
                )
            }
        };




        return (
            <Fragment>
                {renderProduct()}
                {renderTextFields()}




            </Fragment>
        );
    }
}

