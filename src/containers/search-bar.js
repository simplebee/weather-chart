import React, {Component} from 'react';
import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {q: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({q: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.q}
              onChange={this.handleInputChange}
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

export default SearchBar;