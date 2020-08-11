import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actionCreators';
import { connect } from 'react-redux'

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal(props) {
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={() => props.changeSignal('red')}>Red</button>
        <button type="button" onClick={() => props.changeSignal('yellow')}>Yellow</button>
        <button type="button" onClick={() => props.changeSignal('green')}>Green</button>
      </div>
      <img className="signal" src={renderSignal(props.signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (e) => dispatch(changeSignal(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)