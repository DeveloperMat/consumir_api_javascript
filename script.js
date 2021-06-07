const app = document.querySelector('#app');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(respond => respond.json() )
.then(data => {
    data.forEach(user => {
      const p = document.createElement('p');
      p.setAttribute('id',user.id)
      p.innerHTML = user.name;
      p.addEventListener('click',function(){
          window.location.href = `./user.html?id=${user.id}`;
      } )
      app.appendChild(p);
    });
} )
.catch(err =>console.log(err))