document.querySelector('#load').addEventListener('click', loadPosts);



//lOAD POSTS USING AJAX 

function loadPosts() {



     const xhr = new XMLHttpRequest();


     //REST api that gives you back A LIST OF JSON OBJECTS 
     xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);

     xhr.onload = function () {
          if (this.status == 200) {
               const response = JSON.parse(this.responseText);
               //print the contents

               let output = '';

               response.forEach(function (post) {
                    output += `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
               `
               });
               document.querySelector('#result').innerHTML = output;
          }
     }
     xhr.send();

}