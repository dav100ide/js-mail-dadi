// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.getElementById('user-mail').value;
const validMails = ['pippo@gmail.com', 'marco@gmail,com', 'ciao@gmail.com', 'boolean@gmail.com'];
const verifyBtn = document.getElementById('verify-mail');

verifyBtn.addEventListener('click', function () {
   if ((userMail = validMails)) {
      console.log('mail valida');
   } else {
      console.log('mail non valida');
   }
});
