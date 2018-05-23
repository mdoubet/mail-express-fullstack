import React, {Component, Fragment} from 'react'

//imports for graphql query
import loadProducts from '../config/apiQueries'

// local react component imports
import Product from '../components/Product'
import CategoryInline from '../components/CategoryInline'

export default class extends Component {
    state = { products: [] };

    shuffle = (input) => {

        for (let i = input.length-1; i >=0; i--) {

            const randomIndex = Math.floor(Math.random()*(i+1));
            const itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }
    async componentDidMount(){
        const p = await loadProducts();
        this.setState({products: p});
        let x = [9,8,7,6,5,4,3,2,1,0];
        console.log(this.shuffle(x));
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

