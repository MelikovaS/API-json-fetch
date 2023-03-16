let API_URL = "https://jsonplaceholder.typicode.com/users";
let row = document.querySelector(".row");
fetch(API_URL)
.then((Response)=> Response.json())
.then((data) => 
// console.log(data)
    {
        for (let i = 0; i < data.length; i++) {
         row.innerHTML +=   
         `<div class="col-4">
         <div class="card" style="width: 18rem;">
             <div class="card-body">
               <h5 class="card-title">${data[i].name}</h5>
               <h6 class="card-subtitle mb-2 text-muted">${data[i].surname}</h6>
               <p class="card-text">${data[i].email}</p>
               <a href="#" class="card-link">Card link</a>
               <a href="#" class="card-link">Another link</a>
             </div>
         </div>
     </div>`
        }
    });