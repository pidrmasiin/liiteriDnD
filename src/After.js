import React from 'react';
import cottage from './cottage.png'
import { Grid, Header} from 'semantic-ui-react'
import girl from './girl.png'
import './App.css';

class After extends React.Component {
    render() {
        return (
                  <div className='test'>
                  <Grid>
                  <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                    <img src={cottage}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Header><h1 className='speak'>Jihuu löysit Liiterin!</h1></Header>
                    <div className='myIframe'>
                    <iframe 
                     src='http://liiteri.net/' alt="Web site is not avaialable"
                     />
                    </div>
                    </Grid.Column>
                    <Grid.Column  width={4}>
                    <img src={girl}/>
                    </Grid.Column>
                    </Grid.Row>
                   </Grid>
                 </div>
               
        )
    }
}

export default After;