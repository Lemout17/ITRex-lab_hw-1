const togglePassword = (e) => {
  if (!e.target.classList.contains('input__svg')) {
    return
  }

  e.target.previousElementSibling.type === 'password'
    ? (e.target.previousElementSibling.type = 'text')
    : (e.target.previousElementSibling.type = 'password')

  e.target.classList.contains('input__svg_close')
    ? e.target.classList.replace('input__svg_close', 'input__svg_open')
    : e.target.classList.replace('input__svg_open', 'input__svg_close')
}

export default togglePassword
