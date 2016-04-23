import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

require("../less/App.less");

const style = {
    margin: 12
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.listData.products.map(product => (
                        <div className="col-sm-6">
                            <Card>
                                <CardHeader title={product.name} />
                                <CardMedia>
                                    <img src={product.meta.imageBaseUrl + product.oViewerImages[0].cdnPath} />
                                </CardMedia>
                                <CardTitle title={product.name} subtitle={product.priceSet.label +" "+ product.priceSet.formattedPrice} />
                                <CardText>
                                    {product.shortDescription}
                                </CardText>
                                <CardActions>
                                    <RaisedButton label="Vote" secondary={true} style={style} />
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    userData: PropTypes.object.isRequired,
    listData: PropTypes.object.isRequired,
    commentData: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        userData: state.userData,
        listData: state.listData,
        commentData: state.commentData
    }
}

export default connect(mapStateToProps)(App);