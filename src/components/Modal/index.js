import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { OverLay, Container, Footer } from './styles';
import Button from '../Button';

export default function Modal({
  danger,
  visible,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  if (!visible) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <OverLay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              className="delete-button"
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </OverLay >,
      document.getElementById('modal-root'),
    );
  }
}


Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
