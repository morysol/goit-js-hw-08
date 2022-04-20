const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');

// submiting

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(` ------> submited email: ${email.value}, message: ${message.value}`);

  loggingEmailMessage('email', '');
  loggingEmailMessage('message', '');

  document.querySelector('textarea[name=message]').textContent = '';

  event.currentTarget.reset();
}

// logging

const localStorageLable = 'feedback-form-state';
const localStorageEmailMessage = localStorage.getItem(localStorageLable);

// console.log(localStorage.getItem('zzxxcc'));
// testObj = JSON.parse(localStorage.getItem('zzxxcc'));
// console.log(localStorage.getItem('testObj'));
// if (testObj === null) {
//   alert(null);
// }

// if (localStorageEmailMessage.email !== undefined) {
//   console.log(localStorageEmailMessage.email);
// }
// if (localStorageEmailMessage.message !== undefined) {
//   console.log(localStorageEmailMessage.message);
// }

let storageInProgress = JSON.parse(localStorageEmailMessage);

if (storageInProgress === null) {
  storageInProgress = {
    email: '',
    message: '',
  };
}

console.log(
  // storageInProgress.email,
  // localStorageEmailMessage,
  JSON.parse(localStorageEmailMessage),
);

document.querySelector('input[name=email]').value = storageInProgress.email;
document.querySelector('textarea[name=message]').textContent = storageInProgress.message;

feedbackForm.addEventListener('input', _.throttle(logInputedString, 500));

function logInputedString(e) {
  //   console.log(e, e.target.value, e.target.type, e.target.hasAttribute('autofocus'));
  const name = e.target.name;
  const value = e.target.value;
  switch (name) {
    case 'email':
      loggingEmailMessage(name, value);
      break;

    case 'message':
      loggingEmailMessage(name, value);
      break;

    default:
      break;
  }
}

function loggingEmailMessage(name, value) {
  // console.log('logging', name, value);
  // console.log(storageInProgress);

  storageInProgress[name] = value;

  localStorage.setItem(localStorageLable, JSON.stringify(storageInProgress));
}
