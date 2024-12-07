const content = document.getElementById("grid");
const user_cotent = document.getElementById("user");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const block = document.getElementById("block");

fetch('https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/db')
    .then(async function (respon) {
        let data = await respon.json();


        data.product.forEach(element => {

            content.innerHTML += `
                <div class="item"> 
                <h3>Name: ${element.name} </h3>
                <h4>Id: ${element.id}</h4>
                <p>${element.description}</p>
                <img src="${element.photo_url}" >
            <p><a href="Users.html?id=${element.author_id}">Seller profile</a></p>
            <p><button onclick="BuyButton(${element.id})" > Buy </button></p>
            </div>
            `
        });
    })


function BuyButton(alfa){

    fetch(`https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/db`)
    .then(async function (respon) {
        let dat = await respon.json();
            block.innerHTML += `
            <h3>Name: ${dat.product[alfa].name} </h3>
           <h4>Price: ${dat.product[alfa].price}</h4>
           `;
    })


  
}

    function toggleBlock() {
        if (block.style.display === "none") {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      }