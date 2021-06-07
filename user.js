const app = document.querySelector('#app');
const url = 'https://jsonplaceholder.typicode.com/users';
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id');


fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p');
    name.innerHTML = data.name;
    const email = document.createElement('p');
    email.innerHTML = data.email;
    app.appendChild(name);
    app.appendChild(email);
} )
.catch(err => err); 