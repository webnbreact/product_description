import React from 'react';
import styles from './style.css';

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
        <div className={styles.listingInfo}>
          <ul className={styles.home_type}>{this.state.listingInfo.homeType}</ul>
          <ul className={styles.home_name}>{this.state.listingInfo.homeName}</ul>
          <ul className={styles.home_location}>{this.state.listingInfo.homeLocation}</ul>
          <ul>{this.state.listingInfo.homeDescription}</ul>
          <ul>{this.renderMoreDescription()}</ul>
          <ul className={styles.button} onClick={this.showMore}>
          {this.state.isExpanded ? 'Hide' : 'Read more about the space'}</ul>
        </div>
      </div>
    )
  }
}

export default Listing;