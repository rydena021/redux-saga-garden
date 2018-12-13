import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from '../PlantItem/PlantItem';

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({ type: 'FETCH_PLANTS' })
    }

    render() {

        let plantHtml = this.props.reduxState.plantsReducer.map( plant => <PlantItem key={plant.id} plant={plant}/>)
        return (
            <div>
                {plantHtml}
            </div>
        );
    }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(PlantList);
