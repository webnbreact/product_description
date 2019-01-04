import React from 'react';
import styles from './Amenities.css';
import Popup from './Modal.jsx';

class Amenities extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className={styles.containerDiv}>
      <div className={styles.amenitiesInfo}>
        <div className={styles.title}>Amenities</div>
        <div className={styles.container}>
          <div className={styles.row1}>
              <span className="fas fa-utensils" /> 
              <span>Kitchen</span>
            <span className="fas fa-wifi" />
            <span>Wifi</span>
          </div>
          <div className={styles.row2}>
            <span className="fas fa-parking" />
            <span>Parking</span>
            <span className="fas fa-fire-extinguisher" />
            <span>Fire Extinguisher</span>
          </div>
        </div>
        </div>
        <div>
      </div>
      <div>
        {this.state.showPopup ? 
          <Popup closePopup={this.togglePopup}/> : null}
        <ul className={styles.button} onClick={this.togglePopup}>
          {this.state.showPopup ? 'Hide' : 'Show more amenities'}
        </ul> 
          </div>
        </div>  
    );
  }
};

export default Amenities;