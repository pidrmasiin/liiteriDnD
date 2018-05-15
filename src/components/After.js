import React from 'react';
import ReactGA from 'react-ga';
import { Grid, Header } from 'semantic-ui-react';
import girl from './girl.png';
import apploud from './apploud.png';
import applauds from './applaud.mp3';
import '../App.css';


class After extends React.Component {
    componentWillMount = () => {
      ReactGA.event({
        category: 'Lost',
        action: 'click',
      });
      setTimeout(() => {
        this.props.history.push('/info');
      }, 5850);
    }

    componentWillUnmount = () => {
    }
    render() {
      return (
        <Grid style={{ height: '100vh' }}>
          <Grid.Row>
            <Grid.Column style={{ height: '20%' }} width={4}>
              <img src={girl} alt="girl" />
            </Grid.Column>
            <Grid.Column width={8}>
              <audio autoPlay>
                <source src={applauds} />
              </audio>
              <img src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
            </Grid.Column>
            <Grid.Column width={4}>
              <img src={girl} alt="girl" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: '10%' }}>
            <Grid.Column width={16}>
              <Header><h1 className="speak">{this.props.lang.congrats}</h1></Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: '50%' }}>
            <img
              style={{
                    width: '100%',
                    height: '100%',
                  }}
              src={apploud}
              alt="apploud"
            />
          </Grid.Row>
        </Grid>


      );
    }
}

export default After;

