
// create Blog
const blogUrl = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/blog';



let blogTitle = document.getElementById('title');
let Bimage = document.getElementById('Bimage');
let BBody = document.getElementById('BBody');
let createBlogBut = document.getElementById('createBlogBut');

let blogCreate = document.getElementById('blog-create');
let userIdd = localStorage.getItem('userId');

// create a Blog

blogCreate.addEventListener("click", () => {
    let blogtitle = blogTitle.value.trim();
    let bimage = Bimage.value.trim();
    let bbody = BBody.value.trim();


    if (blogtitle === '' || bimage === '' || BBody.value.trim() === '') {
        createBlogBut.textContent = 'please fill all the fields!';
        createBlogBut.style.color = 'red';
    } else {
        fetch(blogUrl, {
            method: 'POST',
            body: JSON.stringify({
                blogtitle: blogtitle,
                bimage: bimage,
                bbody: bbody,
                userid:userIdd,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                createBlogBut.textContent = `The Blog Created Successfully`;
                createBlogBut.style.color = 'white';
                blogTitle.value = '';
                Bimage.value = '';
                BBody.value = '';
            });
    }
})