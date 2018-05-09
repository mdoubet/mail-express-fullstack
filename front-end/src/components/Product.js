import React, {Component, Fragment} from 'react'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
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
        this.setState({expanded: false});
    };



    render() {


        const renderDetails = () => {
            return (
                <article>
                    <h4>dimensions: 16 X 12 x 12</h4>
                    <h4>best used for: books, paper, heavy items</h4>
                </article>
            )
        };

        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{borderRadius:'20px', width: '360px'}}>
                <CardHeader
                    title= 'Small Moving Box'
                    titleColor = '#F0F0F0'
                    subtitle = 'Uhaul'
                    subtitleColor = '#C3C3C3'
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                {/*<CardText>*/}
                {/*<Toggle*/}
                {/*toggled={this.state.expanded}*/}
                {/*onToggle={this.handleToggle}*/}
                {/*labelPosition="right"*/}
                {/*label="This toggle controls the expanded state of the component."*/}
                {/*/>*/}
                {/*</CardText>*/}
                <CardMedia
                expandable={true}
                >
                    <img src = "../images/uhaul-small-box.png"/>
                </CardMedia>

                <CardTitle title="Small Moving Box" subtitle="details" expandable={true} />
                <CardText expandable={true}>
                    {renderDetails()}
                    <CardActions>
                        <FlatButton label="hide details" onClick={this.handleReduce} />
                    </CardActions>
                </CardText>

            </Card>
        );
    }
}