import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import Boom from './Boom.js'
import Logo from './Logo'
import Cyclist from './Cyclist.js'
import Broken from './Broken.js'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import birds from './sounds/birds.mp3'
import Language from '../components/Language.js'

let  timerId = null

class BoomAnime extends React.Component {
    state = {
        boom: false,
        cyclist: false,
        broken: false,
        again: false
    };
  
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                cyclist: !this.state.cyclist
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                boom: !this.state.boom
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                broken: !this.state.broken
            })
        }, 5000)
       
    }

    componentWillMount = () => {
        timerId = setTimeout(() => {
            this.props.history.history.push('/cyclist')
        }, 15000)
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
             <audio autoPlay>
                     <source src={birds}/>
                </audio> 
             <Grid.Column width={2}>
             </Grid.Column>
             <Grid.Column width={12}>
             <TransitionGroup>
             {this.state.cyclist && <Cyclist/>}
             {this.state.boom && <Boom/>}
             {this.state.broken && <Broken history={this.props.history} language={this.props.language}/>}
             </TransitionGroup>
             </Grid.Column>
             <Grid.Column width={2}>
             </Grid.Column>
             </Grid.Row>
             <Grid.Row style={{height: '20%'}}>
             </Grid.Row>
             </Grid>
             </Link> 
             <Language language={this.props.language}/>
           </div>
   
        )
    }
}

export default BoomAnime