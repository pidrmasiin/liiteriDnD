

import React from 'react';
import { TweenMax, SteppedEase, TweenLite } from 'gsap';
import './test.css';
import Cycle from './Cycle';
import bell from './sounds/bell.mp3';

class Cyclist extends React.Component {
  componentDidEnter() {
    const el = this.container;
    TweenLite.from(el, 0.3, { x: -500 }, {
      ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2,
    });
    setTimeout(() => {
      this.componentWillLeave();
    }, 2800);
  }

  componentWillLeave() {
    const el = this.container;
    if (el) {
      TweenMax.fromTo(el, 0.3, { x: 0 }, { ease: SteppedEase.config(15), x: 500, opacity: 0 });
    }
  }

  render() {
    return (
      <div ref={c => this.container = c}>
        <audio autoPlay>
          <source src={bell} />
        </audio>
        <Cycle ref={c => this.container = c} speak={this.props.speak} />
      </div>);
  }
}

export default Cyclist;
