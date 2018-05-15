import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Swipe from './Swipe';
/* eslint-disable */
export default class Logo extends React.Component {
  render() {
    return (
      <Grid.Row style={{ height: '10%' }}>
        <Grid.Column width={2} />
        <Grid.Column width={11}>
          <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Swipe />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
