import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';

import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { q: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ q: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.q);
    this.setState({ q: '' });
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={ this.state.q }
              onChange={ this.handleInputChange }
              placeholder="Search for a city"
            />
            <InputGroup.Button>
              <Button type="submit">Submit</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);