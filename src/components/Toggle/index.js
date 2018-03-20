import React from 'react';
import { func } from 'prop-types'
import { Button } from '../Button';

export class Toggle extends React.Component {
  static propTypes = {
    onChange: func
  }

  state = {isToggleOn: true};

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }), () => {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(this.state.isToggleOn);
      }
    });
  }

  render() {
    return (
      <Button color={this.state.isToggleOn ? '#2c8e36' : 'palevioletred'} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
    );
  }
}
