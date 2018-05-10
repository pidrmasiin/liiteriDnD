import React from 'react';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Drag from './components/Drag';
import Data from './components/Data';
import Info from './components/Info';
import After from './cyclist/After';
import Unbroken from './cyclist/Unbroken';
import BoomAnime from './cyclist/BoomAnime.js'
import Broken from './cyclist/Broken.js'

class App extends React.Component {

  render() {
    console.log('store', this.props.store.getState())
      return  (
        <Router>
        <div className='mydiv'>
            <Route exact path="/" render={({history}) => <Data history={history}/>} />
            <Route exact path="/lost" render={({history}) => <Drag after={this.props.store.getState()} history={history}/>} />
            <Route exact path="/info" render={(history) => <Info history={history}/>} />
            <Route exact path="/after" render={(history) => <After history={history}/>} />
            <Route exact path="/cyclist" render={(history) => <Unbroken history={history}/>} />
            <Route exact path="/boom" render={(history) => <BoomAnime history={history}/>} />
            <Route exact path="/broken" render={(history) => <Broken history={history}/>} />
            </div>
      </Router>
      )
}
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App)