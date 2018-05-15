import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lotties/happy.json';

export default class happy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      animationData,
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped
          isPaused
        />
      </div>);
  }
}
