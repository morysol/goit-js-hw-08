const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');

// submit

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  event.currentTarget.reset();
}

// logging

let storageInProgress = {
  email: '',
  message: '',
};

const localStorageLable = 'feedback-form-state';
const localStorageEmailMessage = localStorage.getItem(localStorageLable);

// if (localStorageEmailMessage.email && localStorageEmailMessage.message) {
// if (
//   localStorageEmailMessage.email !== undefined &&
//   localStorageEmailMessage.message !== undefined
// ) {
// }

storageInProgress = JSON.parse(localStorageEmailMessage);
console.log(
  storageInProgress.email,
  localStorageEmailMessage,
  JSON.parse(localStorageEmailMessage),
);

// document.querySelector('input[name=email]').textContent = storageInProgress.email;
// document.querySelector('textarea[name=message]').textContent = storageInProgress.message;

document.querySelector('input[name=email]').value = storageInProgress.email;
document.querySelector('textarea[name=message]').textContent = storageInProgress.message;

feedbackForm.addEventListener('input', _.throttle(getInputedString, 500));

function getInputedString(e) {
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
  console.log('logging', name, value);
  console.log((storageInProgress[name] = value));

  localStorage.setItem(localStorageLable, JSON.stringify(storageInProgress));
}
