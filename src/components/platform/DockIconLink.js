import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import DockItem from './DockItem';
import Icon from '../icon/Icon';

export default class DockIconLink extends Component {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
  };

  render() {
    const { icon, active, ...rest } = this.props;
    const classes = classnames('ax-dock__icon-link', {
      'ax-dock__icon-link--active': active,
    });

    return (
      <DockItem>
        <Base Component="a" { ...rest } className={ classes }>
          <Icon name={ icon } size="2rem" />
        </Base>
      </DockItem>
    );
  }
}
