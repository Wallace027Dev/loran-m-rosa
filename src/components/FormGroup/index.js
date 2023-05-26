import PropTypes from 'prop-types';
import { Continer } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Continer>
      {children}
      {error && <small>{error}</small>}
    </Continer>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
