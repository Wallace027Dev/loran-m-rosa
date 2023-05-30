import PropTypes from 'prop-types';

import { Container } from "./styles";

import xCircle from '../../../assets/images/icons/xCircle.svg'
import checkCircle from '../../../assets/images/icons/checkCircle.svg'

export default function ToastMessage({ text, type }) {
  return (
    <Container>
      {type === 'danger' && <img src={xCircle} alt="X" />}
      {type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>
        {text}
      </strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};