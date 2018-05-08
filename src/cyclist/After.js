import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { SteppedEase, TweenLite} from 'gsap'
import './test.css'
import '../App.css'
import Cyclist from './Cyclist.js'
import Info from '../components/Info.js'
import { Grid, Image} from 'semantic-ui-react'
import Happy from './Happy.js'
                       
class After extends React.Component {
    state = {
        cyclist: false,
        after: false
    };

      componentDidMount = () => {
          setTimeout(() => {
              this.setState({
                  cyclist: !this.state.cyclist
              })
          }, 2000)
          setTimeout(() => {
              this.setState({
                  after: !this.state.after
              })
          }, 6000)
      }

      componentDidEnter () {
          setTimeout(() => {
              this.setState({
                  cyclist: !this.state.cyclist
              })
          }, 100)
          const el = this.container
          TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2})
      }



      render () {
          if(this.state.after){
              return(
                <Info history={this.props.history} cyclist={true}/>
              )
          }
          return(
              <div className="liiteri" ref={c => this.container = c}>
                  <Grid style={{height: '100vh'}}>
                      <Grid.Row>
                      </Grid.Row>
                      <Grid.Row>
                      </Grid.Row>
                      <Grid.Row>
                      </Grid.Row>
                      <Grid.Row>
                          <Grid.Column width={5}>
                              <Happy/>
                          </Grid.Column>
                          <Grid.Column className='bicycle' width={6}>
                              <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                          </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                          <Grid.Column width={5}>
                          </Grid.Column>
                          <Grid.Column width={10}>
                              <div className='box'>
                                  <TransitionGroup>
                                      { this.state.cyclist && <Cyclist speak={'Hey, thanks a lot. You showed me that repairing is easy. Just use Liiteri!'}/>}
                                  </TransitionGroup></div>
                          </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                      </Grid.Row>
                  </Grid>
              </div>
          )
      }
}

export default After
