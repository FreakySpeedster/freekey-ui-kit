import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div>
      {visible && (
        <div
        style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px',
            background: '#925FF0',
            color: '#FFFFFF',
            borderRadius: '4px',
            boxShadow: '0px 10px 10px 1px rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
          }}
        >
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
