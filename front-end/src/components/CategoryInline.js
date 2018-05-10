import React, {Component, Fragment} from 'react'
import { GridList, GridTile } from 'material-ui/GridList'



export default class extends Component {
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            titleStyle: {
                color: 'rgb(0, 188, 212)',
            },
        };

        const products = this.props.products;
        const renderCategory = products.map(product =>{
            const image = `https://raw.githubusercontent.com/mdoubet/mail-express-fullstack/master/front-end/src/images/${product.imageURL}`
            return (
                <GridTile  key={product.imageURL} title={product.name} titleStyle={{color: 'yellow'}} style = {{margin: '5px', width: '200px', borderRadius: '12px', border: '3px solid #C0C0C0', boxShadow: '6px 2px #C0C0C0'}}
                           titleBackground="#004BA0">

                    <img src={image}/>
                </GridTile>
        )})
        return (
            <GridList style = {{display:'flex', flexWrap:'nowrap', overflowX:'auto', padding: '22px', margin: '8px'}} cols={2.2} >
                {renderCategory}
            </GridList>
        );
    }
}