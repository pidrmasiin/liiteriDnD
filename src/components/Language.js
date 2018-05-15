import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button} from 'semantic-ui-react'
import ReactGA from 'react-ga';


class Language extends React.Component {
    language = () => {
        ReactGA.event({
            category: 'Language',
            action: 'Language change'
        });
        if(this.props.language.finnish){
            this.context.store.dispatch(
                {type: 'ENGLISH'}
              )
        } else {
            this.context.store.dispatch(
                {type: ''}
              )
        }
    }
 
    render() {
        return (
            <Grid.Row>
            <Grid.Column width={12}>
            </Grid.Column>
            <Grid.Column width={3}>
            <Button onClick={this.language} color='blue'>{this.props.language.language}</Button>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            </Grid.Row> 
                 
        )
    }
}

Language.contextTypes = {
    store: PropTypes.object
}

export default Language;