export default function isCardNumberValid(cardNumber) {
  const regex = /\b(?:\d[ -]*?){13,16}\b/
  return cardNumber.match(regex)
}
