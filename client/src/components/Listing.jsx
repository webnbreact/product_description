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
      <div className={styles.outerContainer}>
      <div className={styles.listingInfo}>
        <div>
          <div>
            <div class="listingHeader">
              <li className={styles.homeType}>{this.state.listingInfo.homeType}</li>
              <li className={styles.homeName}>{this.state.listingInfo.homeName}</li>
              <li className={styles.homeLocation}>{this.state.listingInfo.homeLocation}</li>
            </div>
            <li className={styles.guest}>
              <star class="fas fa-male" /> 4 Guests  2 bedrooms  2 beds  2 baths
            </li>
          </div>
        </div>
        <div className={styles.hostImage}>
        <img src={this.state.listingInfo.hostImage} />
      </div>
      </div>
      <hr />
      <div className={styles.moreInfo}>
        <li>{this.state.listingInfo.homeDescription}</li>
        <li>{this.renderMoreDescription()}</li>
        <li className={styles.button} onClick={this.showMore}>
        {this.state.isExpanded ? 'Hide' : 'Read more about the space'}</li>
        <li className={styles.button}>Contact host</li>
      </div>
      <hr />
      <Amenities />
      </div>
    )
  }
}

export default Listing;
