import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Cyclist from './Cyclist';
import Logo from './Logo';
import Language from '../components/Language';

import './test.css';
import '../App.css';

let timerId = null;

class Unbroken extends React.Component {
  constructor() {
    super();
    this.state = {
      cyclist: false,
    };
  }


  componentWillMount = () => {
    timerId = setTimeout(() => {
      this.props.history.history.push('/boom');
    }, 7000);
  }
  componentDidMount = () => {
    ReactGA.pageview('/cyclist');
    setTimeout(() => {
      this.setState({
        cyclist: !this.state.cyclist,
      });
    }, 2000);
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
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                  <TransitionGroup>
                    { this.state.cyclist &&
                    <Cyclist speak={this.props.language.cyclist} />}
                  </TransitionGroup>
                </Grid.Column>
              </Grid.Row>
            </Link>
          </Grid>
          <Language language={this.props.language} />
        </Grid>

      );
    }
}


export default Unbroken;
