export default function isPhoneValid (phone) {
  // receives the phone and validates it from
  // the browser side using regex
  const regex = /^\d{10,11}$/

  return regex.test(phone)
}
