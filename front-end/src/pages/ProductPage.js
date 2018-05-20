import React, {Component, Fragment} from 'react'
import MenuBar from '../components/MenuBar'

//imports for graphql query
import loadProducts from '../config/apiQueries'

// local react component imports
import Product from '../components/Product'
import CategoryInline from '../components/CategoryInline'

export default class extends Component {
    state = { products: [] };

    async componentDidMount(){
        const p = await loadProducts();
        this.setState({products: p})
    }
    render() {
        const products = this.state.products;
        return (
            <Fragment>
                {products[0] ?
                    <Fragment>
                        <Product product = {products[0]}/>
                        <CategoryInline products = {products}/>
                    </Fragment>
                : <p>loading products</p>}

            </Fragment>
        );
    }
}