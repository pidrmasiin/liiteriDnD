import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Boom from './Boom';
import Logo from './Logo';
import Cyclist from './Cyclist';
import Broken from './Broken';
import birds from './sounds/birds.mp3';
import Language from '../components/Language';

let timerId = null;

class BoomAnime extends React.Component {
    state = {
      boom: false,
      cyclist: false,
      broken: false,
    };


    componentWillMount = () => {
      timerId = setTimeout(() => {
        this.props.history.history.push('/cyclist');
      }, 15000);
    }

    componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          cyclist: !this.state.cyclist,
        });
      }, 1000);
      setTimeout(() => {
        this.setState({
          boom: !this.state.boom,
        });
      }, 4000);
      setTimeout(() => {
        this.setState({
          broken: !this.state.broken,
        });
      }, 5000);
    }

    componentWillUnmount = () => {
      clearTimeout(timerId);
    }

    render() {
      return (

        <Grid style={{ height: '100vh' }}>
          <Grid style={{ height: '95%' }}>
            <Logo />
            <Link to="/after">
              <Grid.Row style={{ height: '80%' }}>
                <audio autoPlay>
                  <source src={birds} />
                </audio>
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                  <TransitionGroup>
                    {this.state.cyclist &&
                    <Cyclist />}
                    {this.state.boom &&
                    <Boom />}
                    {this.state.broken &&
                    <Broken history={this.props.history} language={this.props.language} />}
                  </TransitionGroup>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
              <Grid.Row />
            </Link>
          </Grid>
          <Language language={this.props.language} />
        </Grid>


      );
    }
}

export default BoomAnime;

