// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.getElementById('user-email').value;
const validMails = ['pippo@gmail.com', 'marco@gmail.com', 'ciao@gmail.com', 'boolean@gmail.com'];
const verifyBtn = document.getElementById('verify-mail');
console.log(userMail);
// verifyBtn.addEventListener('click', function () {
//    const validMail = validMails[i];
//    if (userMail === validMail[i]) {
//       console.log('ok');
//    } else {
//       console.log('non valida');
//    }
// });
