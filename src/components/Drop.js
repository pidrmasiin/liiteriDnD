import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';
import cottage from './maja.png';


const squareTarget = {
  drop() {
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}


class Drop extends React.Component {
    after = () => {
      this.context.store.dispatch({
        type: 'AFTER',
        language: this.context.store.getState().language.finnish,
      });
      return (<div />);
    }

    render() {
      const { connectDropTarget, isOver } = this.props;

      return (
        <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
        >
          {connectDropTarget(<img
            style={{ width: '100%', height: '100%' }}
            src={cottage}
            alt="kylä"
          />)}

          {isOver &&
                      this.after()
                    }
        </div>
      );
    }
}

Drop.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
};

Drop.contextTypes = {
  store: PropTypes.object,
};

export default DropTarget(ItemTypes.DRAG, squareTarget, collect)(Drop);
