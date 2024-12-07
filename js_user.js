const content = document.getElementById("grid");
const user_cotent = document.getElementById("user");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const block = document.getElementById("block");

fetch(`https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/users?id=${id}`)
    .then(async function (respon) {
        let user = await respon.json();
        console.log(user);
        user_cotent.innerHTML = `
          <div class="user"> 
            <h3>Name: ${user[0].name} </h3>
            <h4>Id: ${user[0].id}</h4>
            <p>${user[0].balance}</p>
            <img src="${user[0].photo_url}" >
        </div>        `;
    });


fetch(`https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/product?=author_id${id}`)
    .then(async function (respon) {
        let data = await respon.json();
        
        data.forEach(element => {
            content.innerHTML += `
            <div class="item"> 
            <h3>Name: ${element.name} </h3>
            <h4>Id: ${element.id}</h4>
            <p>${element.description}</p>
            <img src="${element.photo_url}" >
        </div>
        `;
        });
    });

    function toggleBlock() {
        if (block.style.display === "none") {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      }