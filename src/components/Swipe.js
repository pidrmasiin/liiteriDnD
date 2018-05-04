import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './swipe_left.json'
 
export default class Swipe extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={200}
              width={200}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    </div>
  }
}