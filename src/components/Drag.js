import React from 'react';
import '../App.css';
import girl from './girl.png'
import please from './please.mp3'
import hello from './hello.mp3'
import cottage from './maja.png'
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import Drop from './Drop';
import After from './After';
import { Grid } from 'semantic-ui-react'
import { DragSource } from 'react-dnd';

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
      drag: true
    }
  }

  componentWillMount = () => {
    document.getElementById('body').className='map'
  }

    componentWillUnmount(){
    setTimeout(()=> {
      this.setState({
        show: !this.state.show
      })
    }, 4000)
  }
 
  show = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    })
  }

  drag = (e) => {
  }

  allowDrop = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    })
  }
  
  render() {

    if(this.state.drag){
      
      this.componentWillUnmount()
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
        
        <Grid style={{height: '100vh'}}>
        
        <Grid.Row style={{height: '5%'}}>
        <Grid.Column  width={16}>
        <h1 className='speak'>LIITERI!</h1>
         </Grid.Column>
         </Grid.Row>
        
         <Grid.Row style={{height: '40%'}}>
         <Grid.Column  width={1}>
         </Grid.Column>
         <Grid.Column width={7}>
         </Grid.Column>
         <Grid.Column  width={5}>
         {!this.state.show &&
        <audio autoPlay>
        <source src={hello}/>
        </audio>
         }
         <h1 style={visible2} className='speak'>HELP ME !</h1>
         <img style={visible2} alt='girl' id="drag1" src={girl} draggable="true" onDragStart={this.drag}/>
         </Grid.Column>
         <Grid.Column>
         </Grid.Column>
         </Grid.Row>
        
         <Grid.Row style={{height: '40%'}}>
         
         <Grid.Column width={5}>
         {this.state.show &&
        <audio autoPlay>
        <source src={please}/>
        </audio>
         }
         <h1 style={visible1} className='speak'>DRAG ME TO THE CLOSEST LIITERI!</h1>
         <img style={visible1}  alt='girl' id="drag1" src={girl} draggable="true" onDragStart={this.drag}/>
         </Grid.Column>
         <Grid.Column width={2}>
         </Grid.Column >
         <Grid.Column >
         <Drop>
            <div id="div1" onDrop={this.show} onDragOver={this.allowDrop}>
              <img src={cottage} alt='kylä'/>
            </div>
          </Drop>
         </Grid.Column>
         </Grid.Row>
         <Grid.Row style={{height: '15%'}}>
         <Grid.Column width={12}>
         </Grid.Column >
         <Grid.Column width={2}>
         </Grid.Column >
         </Grid.Row>
         </Grid>
         </div>
       )
    }
    document.getElementById('body').className='body'
    return(
      <After history={this.props.history}/>
    )
  }
}

Drag.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

Drag.contextTypes = {
  store: PropTypes.object
}

export default DragSource(ItemTypes.DRAG, dragSource, collect)(Drag);