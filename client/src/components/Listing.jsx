import React from 'react';
import styles from './style.css';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      listingInfo: {},
    }
    this.showMore = this.showMore.bind(this)
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

  showMore() {
    console.log('clicked')
  
  }

  render() {
    return (    
      <div className={styles.containerDiv}>
        <div className={styles.listingInfo}>
          <div>
            <ul>{this.state.listingInfo.homeType}</ul>
            <ul>{this.state.listingInfo.homeName}</ul>
            <ul>{this.state.listingInfo.homeLocation}</ul>
            <ul>{this.state.listingInfo.homeDescription}</ul>
            <button onClick={this.showMore}>Read more about the space</button>
          </div>
        </div>
        </div>
    )
  }
}

export default Listing;