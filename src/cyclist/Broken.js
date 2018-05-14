import React from 'react'
import {SteppedEase, TweenLite} from 'gsap'
import './test.css'
import { Image } from 'semantic-ui-react'
import fall from './css/fall.png'
import sad from './sounds/sad.mp3'


class Broken extends React.Component {

    state = {
        speak: false
    };

    componentDidEnter () {
        setTimeout(() => {
            this.setState({
                speak: !this.state.speak
            })
        }, 2000)
     
        const el = this.container
        TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 500, opacity: 1, delay: 2})
    }
  
    render () {
       console.log('porps', this.props)
        return (
            <div className='flip' ref={c => this.container = c}>
               <audio autoPlay>
                     <source src={sad}/>
                </audio> 
                <Image src={fall} alt="logo" />
                { this.state.speak && <h1 className='speak'>{this.props.language.fall}</h1>}
            </div>
           
        )
    }
}

export default Broken