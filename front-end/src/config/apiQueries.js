import gql from "graphql-tag";
import {client} from "./client";

const loadProducts = async () => {
    const prods = await client.query(
        {
            query: gql`
                query {
                    products{
                        name
                        nameLine1
                        nameLine2
                        id
                        model
                        imageURL
                        highlight1
                        highlight2
                        price
                        details{
                            property
                            value
                        }
                        path
                        quantityInStock
                    }
                }`
        }
    ).then( result => result.data.products);
   return prods;
}



export default loadProducts