const btnLogin = document.querySelector('.btn__login__text');
const windowReg = document.querySelector('.modal__window__login');
const body = document.querySelector('body');
const regBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login');
const loginWindow = document.querySelector('.login__window');
const regWindow = document.querySelector('.reg__window');


btnLogin.addEventListener('click', function(){
    windowReg.classList.remove('hidden')
    body.classList.add('no__scroll')
});

windowReg.addEventListener('click', function(){
    windowReg.classList.add('hidden')
});

windowReg.querySelector('.modal__content__container').addEventListener('click', function(e) {
    e.stopPropagation()
})

regBtn.addEventListener('click', function() {
    loginWindow.classList.add('hidden')
    regWindow.classList.remove('hidden')
})

loginBtn.addEventListener('click', function() {
    regWindow.classList.add('hidden')
    loginWindow.classList.remove('hidden')
})



