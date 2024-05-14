let user = prompt('enter your username');
let passwprd = prompt('enter your password');
answer =
  user === 'admin' && passwprd === '1234'
    ? alert('hallo admin')
    : alert('hallo guest');
