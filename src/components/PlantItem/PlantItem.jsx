import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PlantItem extends Component {

  deletePlant = () => {
    this.props.dispatch({ type: 'DELETE_PLANT', payload: this.props.plant.id })
  }

  viewDetails = () => {
    this.props.history.push(`/${this.props.plant.id}`);
  }

  render() {
    return (
      <ul>
        <li>Name: {this.props.plant.name}</li>
        <li>Kingdom: {this.props.plant.kingdom}</li>
        <li>Clade: {this.props.plant.clade}</li>
        <li>Order: {this.props.plant.order}</li>
        <li>Family: {this.props.plant.family}</li>
        <li>Subfamily: {this.props.plant.subfamily}</li>
        <li>Genus: {this.props.plant.genus}</li>
        <button onClick={() => this.deletePlant()}>Delete</button>
        <button onClick={()=>this.viewDetails()}>More Details</button>
      </ul>
    );
  }
}

export default withRouter(connect()(PlantItem));
