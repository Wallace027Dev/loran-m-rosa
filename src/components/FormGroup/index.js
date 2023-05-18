import { Continer } from './styles'
import PropTypes from 'prop-types'

export default function FormGroup ({ children }) {
  return <Continer>{children}</Continer>
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}
