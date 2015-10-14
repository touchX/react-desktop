import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Button from './Button';

var styles = {
  osx_10_11: {
    backgroundColor: '#28c940',
    borderColor: '#12ac28',

    'icon': {
      width: '6px',
      height: '6px',
      marginTop: '2px',
      marginLeft: '2px'
    },

    ':active': {
      backgroundColor: '#1f9a31',
      borderColor: '#128622'
    }
  }
};

@Button
@Styling
class Resize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { iconVisible: false };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const displayIcon = this.state.iconVisible ? { opacity: 1 } : { opacity: 0 };
    const iconStyle = Object.assign({}, this.styles.icon, displayIcon);

    return (
      <div style={applyStyle(this.styles)}>
        <svg x="0px" y="0px" viewBox="0 0 6 5.9"  style={iconStyle}>
          <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"/>
          <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"/>
        </svg>
      </div>
    );
  }
}

export default Resize;
