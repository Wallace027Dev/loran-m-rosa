import { useState } from "react";

import { Container } from "./styles";
import Input from "../Input";

import creditCardFlags from '../../assets/images/creditCardFlags.png'

export default function PaymentCard() {
  const [cardNumber, setCardNumber] = useState('');

  function handleCreditCardNumberValue(e) {
    setCardNumber(e.target.value);
  };

  function handleUseCredit(e) {
    setUseCredit(true);
  };

  return (
    <>
      <h2>Sugestão para você</h2>

      <Container>
        <div className="cards">
          <div className="card">
            <div className="card-inputs">
              <label>Nome no cartão</label>
                <Input
                  type="text"
                  className="card-number"
                  placeholder="Nome no cartão"
                  onChange={handleCreditCardNumberValue}
                  value={cardNumber}
                  />
              <label>Número do cartão</label>
                <Input
                  type="text"
                  className="card-number"
                  placeholder="**** **** **** ****"
                  onChange={handleCreditCardNumberValue}
                  value={cardNumber}
                  />
                  <label>Código de segurança</label>
              <Input
                className="cvv"
                type="text"
                placeholder="CVV"
              />
            </div>
            <div>
              <img src={creditCardFlags} alt="Bandeira do cartão" />
            </div>
          </div>
        </div>


      </Container>
    </>
  );
};
