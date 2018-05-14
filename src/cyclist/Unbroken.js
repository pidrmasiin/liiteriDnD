import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import './test.css'
import '../App.css'
import Cyclist from './Cyclist.js'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Logo from './Logo.js'
import Language from '../components/Language.js'
import ReactGA from 'react-ga';

let timerId = null

class Unbroken extends React.Component {
    constructor(){
        super();
        this.state = {
            cyclist: false,
            redirect:false,
            out: false,
            boom: false
        };
    }
      
      componentDidMount = () => {
        ReactGA.pageview('/cyclist');
      setTimeout(() => {
          this.setState({
              cyclist: !this.state.cyclist
          })
      }, 2000)
  }

  componentWillMount = () => {
    timerId = setTimeout(() => {
        this.props.history.history.push('/boom')
    }, 7000)
  }

    componentWillUnmount = () => {
        clearTimeout(timerId);
    }

  

  render () {
      return (   
         <div>
              <Link to="/after"> 
          <Grid style={{height: '100vh'}}>
                <Logo/>
                <Grid.Row style={{height: '60%'}}>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={12}>
                                  <TransitionGroup>
                                
                                      { this.state.cyclist && <Cyclist speak={this.props.language.cyclist}/>}
                                      
                                      </TransitionGroup>
                                      </Grid.Column>
                                      </Grid.Row>
                                    
                                      
                                      </Grid>
                                      </Link>
                                      <Language language={this.props.language}/>
                                      </div>
          
          )
  }
}


export default Unbroken