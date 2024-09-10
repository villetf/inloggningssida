const storedUsername = localStorage.getItem('username');

if (!storedUsername) {
   console.log('inget användarnamn lagrat');
   fillLoggedOutPage();
} else {
   console.log('inloggad');
   fillLoggedInPage();
}

function fillLoggedOutPage() {
   if (document.getElementById('logOutButton')) {
      document.getElementById('logOutButton').remove();
   }
   if (document.getElementById('underText')) {
      document.getElementById('underText').remove();
   }
   const loginForm = document.createElement('form');
   loginForm.id = 'loginForm';
   document.getElementById('loginDiv').appendChild(loginForm);

   const usernameLabel = document.createElement('label');
   usernameLabel.innerText = 'Användarnamn:';
   const usernameField = document.createElement('input');
   usernameField.type = 'text';
   usernameField.id = 'usernameField';
   usernameLabel.appendChild(usernameField);
   loginForm.appendChild(usernameLabel);

   const passwordLabel = document.createElement('label');
   passwordLabel.innerText = 'Lösenord:';
   const passwordField = document.createElement('input');
   passwordField.type = 'password';
   passwordField.id = 'passwordField';
   passwordLabel.appendChild(passwordField);
   loginForm.appendChild(passwordLabel);

   const submitButton = document.createElement('input');
   submitButton.id = 'submitButton';
   submitButton.type = 'submit';
   submitButton.value = 'Logga in';
   loginForm.appendChild(submitButton);

   const mainText = document.getElementById('mainText');
   mainText.innerText = 'Logga in uppe till höger';

   submitButton.onclick = (event) => {
      event.preventDefault();
      testCredentials();
   };
}

function fillLoggedInPage() {
   if (document.getElementById('loginForm')) {
      document.getElementById('loginForm').remove();
   }

   const logOutButton = document.createElement('button');
   logOutButton.id = 'logOutButton';
   logOutButton.innerText = 'Logga ut';
   document.getElementById('loginDiv').appendChild(logOutButton);
   logOutButton.onclick = () => {
      fillLoggedOutPage();
      localStorage.removeItem('username');
   };

   const mainText = document.getElementById('mainText');
   mainText.innerText = 'Välkommen!';

   const underText = document.createElement('h3');
   underText.id = 'underText';
   underText.innerText = `Du är nu inloggad som ${localStorage.getItem('username')}.`;
   document.getElementById('contentDiv').appendChild(underText);
}

function testCredentials() {
   const unameValue = document.getElementById('usernameField').value;
   const pwordValue = document.getElementById('passwordField').value;

   if (unameValue != 'test' || pwordValue != '1234') {
      handleIncorrectLogin();
      return;
   }

   localStorage.setItem('username', unameValue);
   fillLoggedInPage();
}

function handleIncorrectLogin() {
   document.getElementById('usernameField').value = '';
   document.getElementById('passwordField').value = '';
   alert('Inloggningsuppgifterna som du angav var felaktiga.');
}