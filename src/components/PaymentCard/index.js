import { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import Input from "../Input";

import FormGroup from "../FormGroup";
import useErrors from "../../hooks/useErrors";
import isCardNumberValid from "../../utils/isCardNumberValid";
import isCvvNumberValid from "../../utils/isCvvNumberValid";
import Button from "../Button";

export default function PaymentCard() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && cardNumber && cvvNumber && useErrors.length === 0;

  function handleNameValue(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: "name", message: "O nome é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleCardNumberValue(e) {
    setCardNumber(e.target.value);

    if (e.target.value && !isCardNumberValid(e.target.value)) {
      setError({
        field: "card-number",
        message: "O número é inválido inválido.",
      });
    } else {
      removeError("card-number");
    }
  }

  function handleCvvNumberValue(e) {
    setCvvNumber(e.target.value);

    if (e.target.value && !isCvvNumberValid(e.target.value)) {
      setError({
        field: "cvv-number",
        message: "O número de segurança é inválido.",
      });
    } else {
      removeError("cvv-number");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      cardNumber,
      cvvNumber,
    });

    setIsSubmitting(false);
  }

  return (
    <>
      <h2>Faça seu Pagamento no cartão</h2>

      <Container>
        <form noValidate onSubmit={handleSubmit}>
          <div className="card-inputs">
            <label>Nome no cartão</label>
            <FormGroup error={getErrorMessageByFieldName("name")}>
              <Input
                type="text"
                className="card-input"
                placeholder="Fulano de Tal"
                onChange={handleNameValue}
                value={name}
              />
            </FormGroup>

            <label>Número do cartão</label>
            <FormGroup error={getErrorMessageByFieldName("card-number")}>
              <Input
                type="text"
                className="card-input"
                placeholder="**** **** **** ****"
                onChange={handleCardNumberValue}
                value={cardNumber}
                maxLength={16}
              />
            </FormGroup>

            <label>Código de segurança</label>
            <FormGroup error={getErrorMessageByFieldName("cvv-number")}>
              <Input
                className="card-input"
                type="text"
                placeholder="CVV"
                maxLength={3}
                onChange={handleCvvNumberValue}
                value={cvvNumber}
              />
            </FormGroup>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid}
            isLoading={isSubmitting}
          >
            Pagar
          </Button>
        </form>
      </Container>
    </>
  );
}

PaymentCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/* 
<Button
        type="submit"
        disabled={!isFormValid}
        isLoading={isSubmitting}
      >
        {buttonLabel}
      </Button>
    </Form>
  );

});

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}; */
