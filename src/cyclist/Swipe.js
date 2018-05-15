import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lotties/swipe_left.json';

export default class Swipe extends React.Component {
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
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
