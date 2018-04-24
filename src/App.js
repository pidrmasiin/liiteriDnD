import React from 'react';
import Drag from './Drag';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';


class App extends React.Component {

  render() {
    console.log('store', this.props.store.getState())
      return  (
      <Drag after={this.props.store.getState()}/>
      )
}
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App)