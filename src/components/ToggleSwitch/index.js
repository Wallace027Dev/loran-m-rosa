import PropTypes from "prop-types";
import { Container } from "./styles";

export function ToggleSwitch({ adName, inputName, inputId }) {
  return (
    <Container className="switch">
      <h1>{adName}</h1>
      <div className="switch">
        <input type="checkbox" name={inputName} id={inputId} />
        <span className="slider round"></span>
      </div>
    </Container>
  );
};

ToggleSwitch.propTypes = {
  adName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};
