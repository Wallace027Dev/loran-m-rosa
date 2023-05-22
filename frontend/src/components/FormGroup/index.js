import { Continer } from './styles'
import PropTypes from 'prop-types'

export default function FormGroup ({ children, error }) {
  return (
    <Continer>
      {children}
      {error && <small>{error}</small>}
    </Continer>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
}

FormGroup.defaultProps = {
  error: null
}
