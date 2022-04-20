const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');

// submiting
//

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(` ------> submited email: "${email.value}", message: "${message.value}"`);

  loggingEmailMessage('email', '');
  loggingEmailMessage('message', '');

  feedbackForm.querySelector('textarea[name=message]').textContent = '';

  event.currentTarget.reset();
}

// logging

const localStorageLable = 'feedback-form-state';
const localStorageFormData = localStorage.getItem(localStorageLable);

let formData = JSON.parse(localStorageFormData);
if (formData === null) {
  formData = {
    email: '',
    message: '',
  };
}

printFormData(formData);

function printFormData(storage) {
  document.querySelector('input[name=email]').value = storage.email;
  document.querySelector('textarea[name=message]').textContent = storage.message;
}

feedbackForm.addEventListener('input', _.throttle(logInputedString, 500));

function logInputedString(e) {
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
  formData[name] = value;

  localStorage.setItem(localStorageLable, JSON.stringify(formData));
}
