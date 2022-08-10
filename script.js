const passwordForm = document.querySelector('.password-form');
const passInput = document.querySelector('.password');
const passInputConfirm = document.querySelector('.password-confirm');



function showPassword() {
    let eye = this.event.target
    eye.classList.toggle('fa-eye-slash');

    let password = eye.closest('.input-wrapper').querySelector('.password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
   
}

passwordForm.addEventListener('click', function(event) {
    if (event.target.closest('.icon-password')) {
        showPassword()
    }
});

passwordForm.addEventListener('submit', function() {
    let warningTextOne = '</br><span style="color:red;">Потрібно ввести однакові значення</span></br>'
    let warningTextTwo = '</br><span style="color:red;">Потрібно ввести хоть щось!</span></br>'
    if (passInput.value === passInputConfirm.value && passInput.value !== '') {
        alert('You are welcome')
    } else if (passInput.value === '' || passInputConfirm.value === '' ) {
        passInputConfirm.insertAdjacentHTML('afterend', warningTextTwo)
    } else  {
        passInputConfirm.insertAdjacentHTML('afterend', warningTextOne)
    }
});


