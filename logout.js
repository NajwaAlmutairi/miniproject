let text = document.getElementById('text');
// username-placeholder
let usernamePlaceholder = document.getElementById('username-placeholder');
let logout = document.getElementById('logout');
let welcome = document.getElementById('welcome');
let blogCreate = document.getElementById('blog-create');



const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

// 
let userId = localStorage.getItem('userId');
let userName = localStorage.getItem('userName');


if (userId === null) {
    window.location.href = 'loginpage.html';
} else {
    usernamePlaceholder.innerText = userName
    // welcome.innerText = "Welcome " + userName

}

logout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    window.location.href = 'loginpage.html';
})








