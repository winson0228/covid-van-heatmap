// Stateful
import React from 'react';
import { updates } from '../../constants'
import './UpdateList.css';
import UpdateItem from './../UpdateItem'

class UpdateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {updates: updates};
  }

  componentDidMount() {

  }

  retrUpdates = () => {
    // stub
    // Get updates from back-end when component loads
  }

  render() {
      return (
        <div className="Wrapper">
          {this.state.updates.map((update) => {
              return <UpdateItem item={update} />
          })}
        </div>
      );
    }
  }

  export default UpdateList;