import React from 'react';
import styles from './Listing.css';

import Amenities from './Amenities.jsx';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      listingInfo: {},
      isExpanded: false
    }
    this.showMore = this.showMore.bind(this)
    this.renderMoreDescription = this.renderMoreDescription.bind(this)
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
        console.log(`this is myJSON`, myJson, this.state.listingInfo)
      })
      .catch(error => {
        console.log('fetch error', error)
      })
  }

  showMore() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  renderMoreDescription() {
    if (this.state.isExpanded) {
      return this.state.listingInfo.homeDescriptionMore
    } else {
      return;
    }
  }

  render() {
    return (    
      <div className={styles.containerDiv}>
      <div className={styles.hostInfo}>
        {/* <div> */}
          {/* <div> */}
          <div class="headerListing">
            <h1 className={styles.homeType}>{this.state.listingInfo.homeType}</h1>
            <ul className={styles.homeName}>{this.state.listingInfo.homeName}</ul>
            <ul className={styles.homeLocation}>{this.state.listingInfo.homeLocation}</ul>
            <div className={styles.hostImage}>
            <img src={this.state.listingInfo.hostImage} />
          </div>
        </div>
      </div>
        <hr />
        <ul>{this.state.listingInfo.homeDescription}</ul>
        <ul>{this.renderMoreDescription()}</ul>
        <ul className={styles.button} onClick={this.showMore}>
        {this.state.isExpanded ? 'Hide' : 'Read more about the space'}</ul> 
        <ul className={styles.button}>Contact host</ul>
        <hr />
        <Amenities />
        <hr />
      </div>
    )
  }
}

export default Listing;
