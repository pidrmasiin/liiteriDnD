import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lotties/cycle_animation.json';

export default class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
    };

    return (
      <div>
        {this.props.speak &&
        <h1 className="speak">{this.props.speak}</h1>}
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
