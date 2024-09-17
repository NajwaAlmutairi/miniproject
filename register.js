let input = document.getElementById('input');
let inputEmail = document.getElementById('inputEmail');
let input2 = document.getElementById('input2');
let text = document.getElementById('text');

let btn = document.getElementById('btn');

const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

btn.addEventListener("click", () => {
    let userName = input.value;
    let userPassword = input2.value;
    let userEmail = inputEmail.value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(\d{9,})$/;

    if (userName === '' || userPassword === '' || userEmail === '') {
        text.textContent = 'please fill all the fields!';
        text.style.color = 'red';
    } else if (userName.length <= 5) {
        text.textContent = 'The username must be more than 5 letters';
        text.style.color = 'red';
    } else if (!(emailPattern.test(userEmail))) {
        text.textContent = 'Enter a valid email!';
        text.style.color = 'red';
    } else if (!(passwordPattern.test(userPassword))) {
        text.textContent = 'the password must be more than 8 numbers';
        text.style.color = 'red';
    } else {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: userName,
                useremail:userEmail,
                userpassword: userPassword,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                text.textContent = `Register Successfully`;
                text.style.color = 'green';
                input.value = '';
                input2.value = '';
                inputEmail.value = '';


            });
    }
})
