import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import cottage from './cottage.png'
import App from './App';
import after from './afterReducer'


const squareTarget = {
    drop(props) {
    }
  };
  
  function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }


class Drop extends React.Component {
    
    after = () => {
        this.context.store.dispatch(
            {type: 'AFTER'}
          )
    }
    
    render() {
        const { connectDropTarget, isOver } = this.props;
   
            return connectDropTarget(
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                  }}>
                    <img src={cottage}/>
                  
                    {isOver &&
                      this.after()
                    }
                  </div>
            )
        }
}

Drop.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired

}

Drop.contextTypes = {
    store: PropTypes.object
}

export default DropTarget(ItemTypes.DRAG, squareTarget, collect)(Drop);