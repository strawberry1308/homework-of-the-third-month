const username = document.querySelector("#username");
const password = document.querySelector("#password1");
const confirmPassword = document.querySelector("#password2");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");
const show = document.querySelectorAll('.show')
const hide = document.querySelectorAll('.hide')

const usernameRegExp = /^[a-zA-Z0-9]{1,20}@[a-zA-Z0-9]{1,15}\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*-)[a-zA-Z\d-]{8,}$/;

function validateInputs () {
    const password1 = password.value;
    const password2 = confirmPassword.value;
    const email = username.value;
    const valPassword1 = passwordRegExp.test(password1);
    const valPassword2 = passwordRegExp.test(password2);
    const valEmail = usernameRegExp.test(email);
    if (password1 === password2 && valPassword1 && valPassword2 && valEmail) {
        result.textContent = 'success! :)';
        result.style.color = 'green';
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
        username.style.borderColor = 'green';
    }
    else {
        result.textContent = 'STOP (please check your data)';
        result.style.color = 'red';
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        username.style.borderColor = 'red';
    }
}
btn.addEventListener('click', validateInputs);

show.forEach(function(button) {
    button.addEventListener("click", function() {
        password.type = "text";
        confirmPassword.type = "text";
        button.style.display = "none";
        button.nextElementSibling.style.display = "inline-block";
    });
});

hide.forEach(function(button) {
    button.addEventListener("click", function() {
        password.type = "password";
        confirmPassword.type = "password";
        button.style.display = "none";
        button.previousElementSibling.style.display = "inline-block";
    });
});