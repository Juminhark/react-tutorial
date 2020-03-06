import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Food extends Component {
  render() {
    return (
      <div>
        <h4>Hello, {this.props.name} </h4>
        <h5>{this.props.children}</h5>
      </div>
    )
  }
}

Food.propTypes = {
  name: PropTypes.string.isRequired
};

Food.defaultProps = {
  name: 'fruit'
};

export default Food;
