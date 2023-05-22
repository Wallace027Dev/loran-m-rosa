export default function isPhoneValid(phone) {
  // receives the phone and validates it from
  // the browser side using regex
  return phone
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3');
}
