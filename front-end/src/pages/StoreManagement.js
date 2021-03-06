import React, {Component, Fragment} from 'react'



//import allproducts query
import loadProducts from '../config/apiQueries'

import AddProductModal from '../components/AddProductModal'
import EditProduct from '../components/EditProduct'

export default class extends Component {
    state = { products: [] };



    async componentDidMount(){
        const p = await loadProducts();
        this.setState({products: p})
    }
    render() {
        const products = this.state.products
        return (
            <Fragment>

                <div style={{display: 'flex', flexDirection: 'row'}}><h1>Store Management</h1><AddProductModal/></div>
                {products[0] ?
                    products.map(product =>  <EditProduct product = {product}/> )

                    : <p>loading products</p>}

            </Fragment>
        );
    }
}