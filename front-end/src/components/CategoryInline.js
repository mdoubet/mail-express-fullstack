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
        const renderCategory = products.map(product => (
            <GridTile
                key={product.imageURL}
                title={product.name}
                // actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                titleStyle={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
                <img src='../images/uhaul-small-box.png' />
            </GridTile>
        ))
        return (
            <GridList>
                {renderCategory}
            </GridList>
        );
    }
}