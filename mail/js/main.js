// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = document.getElementById('user-email');
const validMails = ['pippo@gmail.com', 'marco@gmail.com', 'ciao@gmail.com', 'boolean@gmail.com'];
const verifyBtn = document.getElementById('verify-mail');
verifyBtn.addEventListener('click', function () {
   console.log(userMail.value);
   for (let i = 0; i < validMails.length; i++) {
      let message = document.getElementById('message');
      const validMail = validMails[i];
      if (userMail.value === validMail) {
         message.innerHTML = 'la mail è valida.';
         break;
      } else {
         message.innerHTML = 'la mail NON è valida.';
      }
      console.log(message);
   }
});
