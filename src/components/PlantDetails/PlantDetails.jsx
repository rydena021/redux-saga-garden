import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PlantDetails extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_PLANT', payload: this.props.match.params.id })
  }

  deletePlant = () => {
    this.props.dispatch({ type: 'DELETE_PLANT', payload: this.props.details.id })
    this.props.history.push('/');
  }

  render() {
    const plant = this.props.details;
    return (
      <div>
        <h1>{plant.name}</h1>
        <ul>
          <li>Kingdom: {plant.kingdom}</li>
          <li>Clade: {plant.clade}</li>
          <li>Order: {plant.order}</li>
          <li>Family: {plant.family}</li>
          <li>Subfamily: {plant.subfamily}</li>
          <li>Genus: {plant.genus}</li>
        </ul>
        <button onClick={() => this.deletePlant()}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  details: reduxState.detailsReducer
});

export default withRouter(connect(mapStateToProps)(PlantDetails));
