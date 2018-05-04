import React from 'react';
import { Grid, Header } from 'semantic-ui-react'
import girl from './girl.png'
import apploud from './apploud.png'
import '../App.css';

class After extends React.Component {
    state = {
        after: false
    };
    componentWillMount = () => {
        setTimeout(() => {
            this.setState({
                after: true
            })
        }, 5000)
    }
    render() {
        if(this.state.after){
            this.props.history.push('/info')
        }
        return (
                  <div className='test'>
                  <Grid>
                  <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                    <img src={girl} alt='girl'/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    
                    {/* <div className='myIframe'>
                    <iframe title='frame'
                     src='http://liiteri.net/' alt="Web site is not avaialable"
                     /> 
                    </div> */}
                    </Grid.Column>
                    <Grid.Column  width={4}>
                    <img src={girl} alt='girl'/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column  width={16}>
                    <Header><h1 className='speak'>Jihuu löysit Liiterin!</h1></Header>
                    <Header><h1 className='speak'>Congratulation you found the nearest repair shop. It's right in front of you!</h1></Header>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <img src={apploud} alt='apploud'/>
                    </Grid.Row>
                   </Grid>
                 </div>
               
        )
    }
}

export default After;