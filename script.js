localStorage.setItem('username', 'test');
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
   document.getElementById('loginDiv').appendChild(loginForm);

   const usernameLabel = document.createElement('label');
   usernameLabel.innerText = 'Användarnamn:';
   const usernameField = document.createElement('input');
   usernameField.type = 'text';
   usernameLabel.appendChild(usernameField);
   loginForm.appendChild(usernameLabel);

   const passwordLabel = document.createElement('label');
   passwordLabel.innerText = 'Lösenord:';
   const passwordField = document.createElement('input');
   passwordField.type = 'password';
   passwordLabel.appendChild(passwordField);
   loginForm.appendChild(passwordLabel);

   const submitButton = document.createElement('input');
   submitButton.id = 'submitButton';
   submitButton.type = 'submit';
   submitButton.value = 'Logga in';
   loginForm.appendChild(submitButton);

   const mainText = document.getElementById('mainText');
   mainText.innerText = 'Logga in uppe till höger';
}

function fillLoggedInPage() {
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