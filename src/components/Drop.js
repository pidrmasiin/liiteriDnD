import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import cottage from './maja.png'


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
                    position: 'absolute',
                    width: '450px',
                    height: '100%'
                  }}>
                    <img style={{ width:'450px',
                    height: '450px'}}src={cottage} alt='kylä'/>
                  
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