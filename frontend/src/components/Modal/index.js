import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { OverLay, Container, Footer } from './styles';
import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <OverLay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger} className="delete-button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </OverLay>,
    document.getElementById('modal-root'),
  );
}

Modal.porpTypes = {
  danger: PropTypes.bool,
};

Modal.dafaultProps = {
  danger: false,
};
