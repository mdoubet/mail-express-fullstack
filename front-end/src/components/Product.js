import React, {Component, Fragment} from 'react'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
// import Toggle from 'material-ui/Toggle'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: !this.state.expanded});
    };



    render() {

        const product = this.props.product;
        const imageURL = `https://raw.githubusercontent.com/mdoubet/mail-express-fullstack/master/front-end/src/images/${product.imageURL}`
        console.log(imageURL)
        const renderDetails = () => {
            return (
                product.details.map( detail =>
                    <p>{detail.property} : {detail.value}</p>
                )
            )
        };

        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{margin: "12px", backgroundColor: '#1976D2',borderRadius:'20px', }}>

                <CardMedia
                    expandable={false} style={{marginTop:"-30px"}}

                    // overlay={}
                >
                    <img src={imageURL} alt="" style={{ marginBottom: "-20px"}}/>
                    <CardTitle title={product.name} style = {{marginTop:"-40px"}} titleStyle= {{color:"white"}}/>
                </CardMedia>
                {/*<div style={{backgroundColor: "white"}}>*/}
                <CardText expandable={false} style = {{backgroundColor:"white", marginBottom: "-20px"}}>
                    <article>
                        <p>{product.highlight1}</p>
                        <p>{product.highlight2}</p>
                    </article>

                </CardText>
                <CardActions style = {{backgroundColor: "white"}}>
                    <FlatButton label="details" onClick={this.handleReduce} />
                </CardActions>



                {/*<CardText>*/}
                {/*<Toggle*/}
                {/*toggled={this.state.expanded}*/}
                {/*onToggle={this.handleToggle}*/}
                {/*labelPosition="right"*/}
                {/*label="This toggle controls the expanded state of the component."*/}
                {/*/>*/}
                {/*</CardText>*/}


                {/*<CardTitle title="Small Moving Box" subtitle="details" expandable={true} />*/}

                <CardText expandable={true} expanded={this.state.expanded} style = {{backgroundColor:"white", marginTop: "-20px"}}>
                    {renderDetails()}

                </CardText>

                {/*</div>*/}
            </Card>
        );
    }
}