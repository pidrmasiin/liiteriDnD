import React from 'react';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Drag from './components/Drag';
import Data from './components/Data';
import Info from './components/Info';

class App extends React.Component {

  render() {
    console.log('store', this.props.store.getState())
      return  (
        <Router>
        <div className='mydiv'>
            <Route exact path="/" render={({history}) => <Drag after={this.props.store.getState()} history={history}/>} />
            <Route exact path="/data" render={() => <Data />} />
            <Route exact path="/info" render={(history) => <Info history={history}/>} />
        </div>
      </Router>
      )
}
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App)