import React from 'react';
import styles from './Modal.css';

class Popup extends React.Component {
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          {/* <h1>{this.props.text}</h1> */}
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;