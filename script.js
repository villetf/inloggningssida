const storedUsername = localStorage.getItem('username');

if (!storedUsername) {
   console.log('inget användarnamn lagrat');
   fillLoggedOutPage();
} else {
   console.log('inloggad');
   fillLoggedInPage();
}

function fillLoggedOutPage() {
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

function testCredentials() {
   const unameValue = document.getElementById('usernameField').value;
   const pwordValue = document.getElementById('passwordField').value;
   console.log(unameValue, pwordValue);

   if (unameValue != 'test' && pwordValue != '1234') {
      handleIncorrectLogin();
      return;
   }

   localStorage.setItem('username', unameValue);
   fillLoggedInPage();
}

function fillLoggedInPage() {
   if (document.getElementById('loginForm')) {
      document.getElementById('loginForm').remove();
   }

   const logOutButton = document.createElement('button');
   logOutButton.id = 'logOutButton';
   logOutButton.innerText = 'Logga ut';
   document.getElementById('loginDiv').appendChild(logOutButton);

   const mainText = document.getElementById('mainText');
   mainText.innerText = 'Välkommen!';

   const underText = document.createElement('h3');
   underText.innerText = `Du är nu inloggad som ${localStorage.getItem('username')}.`;
   document.getElementById('contentDiv').appendChild(underText);
}