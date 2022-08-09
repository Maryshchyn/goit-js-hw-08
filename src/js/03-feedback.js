import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onForSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onForSubmit(e) {
    e.preventDefault();
    const mailForConsole = document.querySelector('[name="email"]').value;
    const messagaForConsole = document.querySelector('[name="message"]').value;
    
    console.log(mailForConsole);
    console.log(messagaForConsole);
    
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

 
function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    // if (savedMessage) {
    //     console.log(savedMessage);
    // };
    
};
populateTextarea();
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
});

// const qwe = Object.entries(mailForConsole);
// console.log(qwe)
// qwe@mail.com










