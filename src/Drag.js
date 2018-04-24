import React from 'react';
import './App.css';
import girl from './girl.png'
import cottage from './cottage.png'
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import Drop from './Drop';
import After from './After';
import { Grid, Header} from 'semantic-ui-react'
import { DragDropContext, DragSource } from 'react-dnd';

const dragSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Drag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      drag: true,
      pass: true
    }
  }

  show = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log('data', data)
    console.log('')
    this.setState({
      show: !this.state.show
    })
    console.log('show', this.state.show)
  }

  drag = (e) => {
  }

  allowDrop = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    })
    this.setState({
      pass: false
    })
  }
  
  render() {
    if(this.state.drag){
      setTimeout(()=> {
      this.setState({
        show: !this.state.show
      })
    }, 5000)
    }
    if(!this.props.after){
      const { connectDragSource, isDragging } = this.props;
      const visible1 = { 
        display: this.state.show ? '' : 'none',
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }
      const visible2 = { 
        display: this.state.show ? 'none' : '',
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }
      return  connectDragSource(
        <div className='test' id='dragable'>
         <h1 className='speak'>LIITERI!</h1>
        <Grid>
        <Grid.Column width={7}>
         </Grid.Column>
         <Grid.Column width={7}>
         <Drop>
         <div id="div1" onDrop={this.show} onDragOver={this.allowDrop}>
            <img src={cottage}/>
          </div>
        </Drop>
         </Grid.Column>
         <Grid.Column width={2}>
         </Grid.Column>
        </Grid>
         <Grid>
         <Grid.Row>
         </Grid.Row>
         <Grid.Row>
         <Grid.Column width={7}>
         </Grid.Column>
         <Grid.Column  width={5}>
         <img style={visible1} id="drag1" src={girl} draggable="true" onDragStart={this.drag}/>
         </Grid.Column>
         <Grid.Column style={visible1} width={3}>
         <h1 className='speak'>DRAG ME TO THE CLOSEST LIITERI!</h1>
         </Grid.Column>
         </Grid.Row>
         <Grid.Row >
         <Grid.Column width={2}>
         </Grid.Column>
         <Grid.Column width={5}>
         <h1 style={visible2} className='speak'>HELP ME !</h1>
         <img style={visible2} id="drag1" src={girl} draggable="true" onDragStart={this.drag}/>
         </Grid.Column>
         <Grid.Column width={3}>
         </Grid.Column>
         </Grid.Row>
         </Grid>
         </div>
       )
    }
    return(
      <After />
    )
  }
}

Drag.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.DRAG, dragSource, collect)(Drag);