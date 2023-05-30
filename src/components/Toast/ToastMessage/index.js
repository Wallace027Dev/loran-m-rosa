import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { Container } from "./styles";

import xCircle from '../../../assets/images/icons/xCircle.svg'
import checkCircle from '../../../assets/images/icons/checkCircle.svg'

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id)
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);


  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <img src={xCircle} alt="X" />}
      {message.type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>
        {message.text}
      </strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,

  onRemoveMessage: PropTypes.func.isRequired,
};
