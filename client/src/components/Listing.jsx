import React from 'react';
import axios from "axios";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      listingInfo: {}

    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:1128/rooms/:id/listing', {
        params: {
          id: this.state.id
        }
      })
      .then(data => {
        console.log('this is data', data.data);
        this.setState({
          listingInfo: data.data
        })
      })
      .catch(err => {
        console.log('axios get failed', err);
      });
  }
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default Listing;