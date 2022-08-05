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
    console.log('YES')

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
 
function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
        
}
    
};

populateTextarea();
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
});

