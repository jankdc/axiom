import React, { Component } from 'react';
import Heading from '../typography/Heading';

export default class PlatformTitle extends Component {
  render() {
    return (
      <Heading { ...this.props } textSize="headline" />
    );
  }
}
