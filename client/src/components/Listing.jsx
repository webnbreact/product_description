import React from 'react';
import axios from "axios";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 1,
      listingInfo: {}

    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:1128/listing', {
        params: {
          listingId: this.state.listingId
        }
      })
      .then(data => {
        console.log('this is data', data.data);
        this.setState({
          listingInfo: data.data
        })
      })
      .catch(error => {
        console.log('axios get failed', err);
      });
  }
  render()
}

export default Listing;