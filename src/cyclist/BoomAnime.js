import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import Boom from './Boom.js'
import Cyclist from './Cyclist.js'
import Broken from './Broken.js'
import { Grid } from 'semantic-ui-react'


class BoomAnime extends React.Component {
    state = {
        boom: false,
        cyclist: false,
        broken: false,
    };
  
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                cyclist: !this.state.cyclist
            })
        }, 8000)
        setTimeout(() => {
            this.setState({
                boom: !this.state.boom
            })
        }, 11200)
        setTimeout(() => {
            this.setState({
                broken: !this.state.broken
            })
        }, 13000)
    }
  
    render () {
        return (
            <Grid.Row>
            <Grid.Row>
    </Grid.Row>
   <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
    <Grid.Column width={11}>
        <TransitionGroup>
        { this.state.cyclist && <Cyclist />}
        { this.state.boom && <Boom/>}
        { this.state.broken && <Broken/>}
        </TransitionGroup>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column width={4}>
    </Grid.Column>
    <Grid.Column width={8}>
        </Grid.Column>
   </Grid.Row>
   </Grid.Row>
  
        )
    }
}

export default BoomAnime