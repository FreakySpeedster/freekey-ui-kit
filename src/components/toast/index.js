import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './freekey-toast.css';

const Toast = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClose(true);
      setTimeout(() => {
        setVisible(false);
      }, 500)
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div>
      {visible && (
        <div className={`toast-box ${close && 'close-toast'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

Toast.defaultProps = {
  duration: 3000,
};

export default Toast;
