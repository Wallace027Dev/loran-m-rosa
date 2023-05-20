export default function isEmailValid (phone) {
  // receives the phone and validates it from
  // the browser side using regex
  const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/
  const regexCaracteresInvalidos = /[^a-zA-Z0-9]/

  return (regex && regexCaracteresInvalidos).test(phone)
}
