import React, {Component, Fragment} from 'react'
import TextField from 'material-ui/TextField'

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
                            deleteProduct(where: {id:"${product.id}"}){
                                name
                                highlight1
                                highlight2
                                price

                            }
                        }
                    `
                }
            ).then( result => result.data.product);
            console.log(prod, " has been deleted!!!");
        }
        const renderProduct = () => {
            return (
                <div style={{display: 'flex', alignContent: 'space-around', flexDirection: 'row'}}>
                    <button onClick={deleteProduct}>DELETE</button>
                    {this.state.expanded ? <button onClick={toggleExpanded}>close it!!</button> : <button onClick={toggleExpanded}>expand</button>}
                    <h2>{product.name}</h2>
                </div>
            )
        }
        const renderTextFields =() =>{
            if(this.state.expanded) {
                return (
                    <Fragment>
                        <TextField id="product-name" defaultValue={product.name} onChange={e => updateFields.name = `name : "${e.target.value}",`}/>
                        <TextField id="name-line-1" defaultValue={product.nameLine1} onChange={e => updateFields.nameLine1 = `nameLine1 : "${e.target.value}",`}/>
                        <TextField id="name-line-2" defaultValue={product.nameLine2} onChange={e => updateFields.nameLine2 = `nameLine2 : "${e.target.value}",`}/>
                        <TextField id="model" defaultValue={product.model} onChange={e => updateFields.model = `model : "${e.target.value}",`}/>
                        <TextField id="price" defaultValue={product.price} onChange={e => updateFields.price = `price : ${e.target.value},`}/>
                        <TextField id="highlight1" defaultValue={product.highlight1} onChange={e => updateFields.highilight1 = `highlight1 : "${e.target.value}",`}/>
                        <TextField id="highlight2" defaultValue={product.highlight2} onChange={e => updateFields.highlight2 = `highlight2 : "${e.target.value}",`}/>
                        <TextField id="imageURL" defaultValue={product.imageURL} onChange={e => updateFields.imageURL = `imageURL : "${e.target.value}",`}/>
                        <TextField id="path" defaultValue={product.path} onChange={e => updateFields.path = `path : "${e.target.value}",`}/>
                        <TextField id="quantityInStock" defaultValue={product.quantityInStock} onChange={e => updateFields.quantityInStock = `quantityInStock : "${e.target.value}",`}/>
                        <button onClick={updateProduct}>Save Changes</button>
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

