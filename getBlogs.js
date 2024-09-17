

const blogUrl = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/blog';
const loginUrl = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';


let containerHome = document.getElementById('containerHome');
let containerprofile = document.getElementById('containerprofile');


let input = document.getElementById('input');
let inputEmail = document.getElementById('inputEmail');
let input2 = document.getElementById('input2');

let userIdd = localStorage.getItem('userId');

// Get All User Blogs 
function getUserBlogs() {
    let userId = localStorage.getItem('userId');
    fetch(blogUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            let userBlogsData = data.filter((element) => {
                return element.userid === userId
            })

            userBlogsData.map((element) => {

                let div = document.createElement('div')

                let imgname = document.createElement('h3')
                imgname.innerText = element.blogtitle
                div.appendChild(imgname)

                let img = document.createElement('img')
                img.src = element.bimage
                div.appendChild(img)

                let par = document.createElement('p')
                par.innerText = element.bbody
                div.appendChild(par)

                let imgbutton = document.createElement('button')
                imgbutton.innerText = 'Remove'
                div.appendChild(imgbutton)

                imgbutton.addEventListener('click', () => {
                    fetch(blogUrl + '/' + element.id, {
                        method: 'DELETE',
                    }).then(response => {
                        if (response.ok) {
                            console.log('removing the Blog');
                            div.remove()
                        }
                    })

                })
                div.classList.add('col');
                containerprofile.appendChild(div);

            })
        })

}

getUserBlogs();



// Get All  Blogs 
function getAllBlogs() {

    fetch(blogUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            data.map((element) => {

                let div = document.createElement('div')

                let imgname = document.createElement('h3')
                imgname.innerText = element.blogtitle
                div.appendChild(imgname)

                let img = document.createElement('img')
                img.src = element.bimage
                div.appendChild(img)

                let par = document.createElement('p')
                par.innerText = element.bbody
                div.appendChild(par)

                let imgbutton = document.createElement('button')
                imgbutton.innerText = 'Remove'
                div.appendChild(imgbutton)

                imgbutton.addEventListener('click', () => {
                    fetch(blogUrl + '/' + element.id, {
                        method: 'DELETE',
                    }).then(response => {
                        if (response.ok) {
                            console.log('removing the Blog');
                            div.remove()
                        }
                    })

                })
                div.classList.add('col');
                containerHome.appendChild(div);

            })
        })

}

getAllBlogs();



function login(id) {
    fetch(loginUrl + '/' + id)
        .then((response) => response.json())
        .then((data) => {
            input.value = data.username;
            input2.value = data.userpassword;
            inputEmail.value = data.userpassword;

        })
}

login(userIdd)