import React from 'react';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      listingInfo: {}

    }
  }

  componentDidMount() {
    fetch(`/rooms/${this.state.id}/listings`)
      .then(response =>
        response.json()
      )
      .then((result) => {
        this.setState({listingInfo: result})
      })
      .then(myJson => {
        console.log(`this is myJSON`, this.state.listingInfo)
      })
      .catch(error => {
        console.log('fetch error', error)
      })
  }
  render() {
    return (
      <div>
        {this.state.listingInfo.homeType}
      </div>
    )
  }
}

export default Listing;