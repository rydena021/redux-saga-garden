import React, { Component } from 'react';
import { connect } from 'react-redux';


const emptyPlantObject = {
  name: '',
  kingdom: '',
  clade: '',
  order: '',
  family: '',
  subfamily: '',
  genus: ''
};

class NewPlantForm extends Component {
  state = emptyPlantObject

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addNewPlant = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PLANT', payload: this.state })
    this.clearPlantFields();
  }

  clearPlantFields = () => {
    this.setState(emptyPlantObject);
  }

  render() {
    return (
            <div>
                <h3>ADD A NEW PLANT</h3>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <form onSubmit={this.addNewPlant}>
                    <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.handleChange} />
                    <input type='text' placeholder='kingdom' name='kingdom' value={this.state.kingdom} onChange={this.handleChange} />
                    <input type='text' placeholder='clade' name='clade' value={this.state.clade} onChange={this.handleChange} />
                    <input type='text' placeholder='order' name='order' value={this.state.order} onChange={this.handleChange} />
                    <input type='text' placeholder='family' name='family' value={this.state.family} onChange={this.handleChange} />
                    <input type='text' placeholder='subfamily' name='subfamily' value={this.state.subfamily} onChange={this.handleChange} />
                    <input type='text' placeholder='genus' name='genus' value={this.state.genus} onChange={this.handleChange} />
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
      }
    }

    const mapStateToProps = reduxState => ({
        reduxState,
    });

    export default connect(mapStateToProps)(NewPlantForm);
