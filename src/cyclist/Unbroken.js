import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import './test.css'
import '../App.css'
import Swipe from './Swipe.js'
import Cyclist from './Cyclist.js'
import { Link } from 'react-router-dom'
import { Grid, Image} from 'semantic-ui-react'
import BoomAnime from './BoomAnime';

class Unbroken extends React.Component {
    constructor(){
        super();
        this.state = {
            cyclist: false,
            redirect:false
        };
    }
      
      componentDidMount = () => {
          setTimeout(() => {
              this.setState({
                  redirect: !this.state.redirect
              })
          }, 20000)
      setTimeout(() => {
          this.setState({
              cyclist: !this.state.cyclist
          })
      }, 3000)
     
  }

  render () {
      if(this.state.redirect){
        if(this.props.history.location.pathname === '/cyclist'){
            this.props.history.history.push('/unbroken')
        } else {
            this.props.history.history.push('/cyclist')
        }
      }
      return (  <Link className="liiteri" to="/after"> 
          <div >
              <Grid style={{height: '100vh'}}>
                  <Grid.Row style={{height:'10%'}}>
                      <Grid>
                          <Grid.Row>
                          </Grid.Row>
                          <Grid.Row>
                          </Grid.Row>
                          <Grid.Row>
                              <Grid.Column width={3}>
                              </Grid.Column>
                              <Grid.Column width={10}>
                                  <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                                  <TransitionGroup>
                                      { this.state.cyclist && <Cyclist speak={'Hey, its nice to be a cyclist'}/>}
                                  </TransitionGroup>
                              </Grid.Column>
                              <Grid.Column width={2}>
                                  <Swipe/>
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </Grid.Row>
                  <Grid.Row style={{height:'60%'}}>
                        <BoomAnime/>
                  </Grid.Row>
              </Grid>
              
             
          </div></Link>)
  }
}


export default Unbroken