// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.getElementById('user-email').value;
const validMails = ['pippo@gmail.com', 'marco@gmail.com', 'ciao@gmail.com', 'boolean@gmail.com'];
const verifyBtn = document.getElementById('verify-mail');
verifyBtn.addEventListener('click', function () {
   console.log(userMail);
   if (userMail === validMails) {
      console.log('ok');
   } else {
      console.log('non valida');
   }
});
