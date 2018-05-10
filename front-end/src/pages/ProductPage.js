import React, {Component, Fragment} from 'react'

//imports for graphql
import gql from 'graphql-tag'
import { client } from '../config/client'

// local react component imports
import Product from '../components/Product'
import CategoryInline from '../components/CategoryInline'

export default class extends Component {
    state = { products: [] };

    loadProducts = async () => {
        const prods = await client.query(
            {
                query: gql`
                query {
                    products{
                        name
                        id
                        imageURL
                        highlight1
                        highlight2
                        price
                        details{
                            property
                            value
                        }
                     }
                 }`
            }
        ).then( result => result.data.products);
        await this.setState({ products: prods});
    }
    render() {
        const products = this.state.products;
        return (
            <Fragment>
                <p>{products[0] ?
                    <Fragment>
                    <Product product = {products[0]}/>
                    <CategoryInline products = {products}/>
                    </Fragment>
                : <button onClick={this.loadProducts}>Load products</button>}</p>

            </Fragment>
        );
    }
}