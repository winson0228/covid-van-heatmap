import React from 'react';
import './AppContainerLayer.css'
import SearchBox from '../SearchBox';
import UpdateList from '../UpdateList';
import MapContainer from '../MapContainer';
import axios from 'axios';

class AppContainerLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            locQuery: "",
            mapCenter: {},
            hotspots: {}
        }
    }

    componentDidMount() {
        this.retrHotspots();
    }

    handleSearch = (str) => {
        console.log("searching...")
        console.log(str)
        this.setState({
            locQuery: str,
            // isSearching: true
        })
        // TODO: Should make API call to Geocoding
        // set mapCenter that gets passed into MapContainer
        // set isSearching to false
    }

    retrHotspots = () => {
        //stub
        // Get hotspots from back-end once component loaded
    }

    render() {
        return (
            <div>
            <SearchBox locQuery={this.state.locQuery} onSearchSubmit={this.handleSearch} />
            <div className="App-container">
              <MapContainer />
              <UpdateList />
            </div>
          </div>
        );
    }
}

export default AppContainerLayer;