import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { connect } from 'react-redux'
import { moveCar }from './redux/actionCreators'

function Cars(props) {
  const { cars:{ blueCar, redCar, yellowCar}, move } = props
  console.log(redCar)
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => move('red', !redCar)} type="button">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => move('blue', !blueCar)} type="button">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => move('yellow', !yellowCar)} type="button">move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cars: {
    redCar: state.cars.red,
    blueCar: state.cars.blue,
    yellowCar: state.cars.yellow,
}})

const mapDispatchToProps = (dispatch) => ({
  move:(a, b)=> dispatch(moveCar(a, b))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)