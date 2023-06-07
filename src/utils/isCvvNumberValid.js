export default function isCvvNumberValid(cvvNumber) {
  const regex = /\b\d{3}\b/
  return cvvNumber.match(regex)
}
