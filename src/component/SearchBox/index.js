// Stateful
import React from 'react';
import { Input, Form } from 'semantic-ui-react'
import './SearchBox.css'

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locQuery: ""
    };
  }

  handleQueryChange = (e) => {
    this.setState({
      locQuery: e.target.value
    })
  }


  handleLocSearch = (e) => {
    if(e) e.preventDefault();
    this.props.onSearchSubmit(this.state.locQuery);
    // Call async method from prop 

  }
  
  render() {
      return (
        <div className="SearchBarWrapper">
          <Form onSubmit={this.handleLocSearch}>
            <Input className="SearchBar" icon="search" size="large" 
            placeholder="Search" onChange={this.handleQueryChange} />
            <Input type="submit" value="Submit username" />
          </Form>
          
        </div>
      );
    }
  }

  export default SearchBox;