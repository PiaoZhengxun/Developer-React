import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favouriteNum: PropTypes.number.isRequired,
  };
  render() {
    const { name, favouriteNum, children } = this.props;
    return (
      <div>
        {name}
        <br />
        {favouriteNum}
        <br />
        {children}
      </div>
    );
  }
}

export default MyComponent;
