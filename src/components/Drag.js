import React from 'react';
import { Grid } from 'semantic-ui-react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import Drop from './Drop';
import After from './After';
import Language from './Language';
import '../App.css';
import girl from './girl.png';
import please from './please.mp3';
import hello from './hello.mp3';
import cottage from './maja.png';

let timerId = null;

const dragSource = {
  beginDrag() {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentWillMount = () => {
    document.getElementById('body').className = 'map';
  }


  componentWillUnmount() {
    timerId = setTimeout(() => {
      this.setState({
        show: !this.state.show,
      });
    }, 4000);
  }

  show = () => {
    timerId = this.setState({
      show: !this.state.show,
    });
  }

  allowDrop = (e) => {
    e.preventDefault();
    timerId = this.setState({
      show: !this.state.show,
    });
  }

  render() {
    if (!this.props.isDragging) {
      clearTimeout(timerId);
      this.componentWillUnmount();
    }
    if (!this.props.store.after) {
      const { connectDragSource, isDragging } = this.props;
      const visible = {
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        height: '100%',
        weight: '100%',
      };


      return (


        <Grid style={{ height: '100vh', weight: '100vh' }}>

          <Grid.Row style={{ height: '5%' }}>
            <Grid.Column width={16}>
              <h1 className="speak">LIITERI!</h1>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '40%' }}>
            <Grid.Column width={1} />
            <Grid.Column width={7} />
            <Grid.Column width={5}>
              {!this.state.show &&
              <div>
                <audio autoPlay>
                  <source src={hello} />
                </audio>
                <h1 className="speak">{this.props.store.language.help}</h1>
              </div>}
              {/* eslint-disable */}
              {!this.state.show &&
           connectDragSource(<img id="dragable" style={visible} alt="girl" id="drag1" src={girl} draggable="true" />)
         }
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '40%' }}>


            <Grid.Column width={5}>
              {this.state.show &&
              <div>
                <audio autoPlay>
                  <source src={please} />
                </audio>
                <h1 className="speak">{this.props.store.language.drag}</h1>
              </div>}
              {this.state.show &&
           connectDragSource(<img id="dragable" style={visible} alt="girl" id="drag1" src={girl} draggable="true" />)
         }
            </Grid.Column>
            <Grid.Column width={2} />
            <Grid.Column width={8}>
              <Drop>
                <div id="div1" onDrop={this.show} onDragOver={this.allowDrop}>
                  <img src={cottage} alt="kylä" />
                </div>
              </Drop>
            </Grid.Column>
          </Grid.Row>
          <Language language={this.props.store.language} />
        </Grid>

      );
    }
    document.getElementById('body').className = 'body';
    return (
      <After history={this.props.history} lang={this.props.store.language} />
    );
  }
}

Drag.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

Drag.contextTypes = {
  store: PropTypes.object,
};

export default DragSource(ItemTypes.DRAG, dragSource, collect)(Drag);
