import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children, func} = props;
  /* setTimeout(() => hideComponent(), timeSeconds*1000); */
  return (
    <div className='Alert'>
      {children.map( each => <div key={each.id} value={each.item} onClick={func}>{each.item}</div>)}
    </div>
  )
}


export default Alert;

/* Alert.propTypes = {
  title: PropTypes.string,
  content:PropTypes.string,
  timeSeconds:PropTypes.number,
  hideComponent:PropTypes.func
} */