const content = document.getElementById("grid");
const user_cotent = document.getElementById("user");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const block = document.getElementById("block");
let product_position = 0;

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
            <p><button onclick="BuyButton(${product_position},${element.id})" > Buy </button></p>
            </div>
            `
            product_position++;
        });

    })

let array_product = [];
let sum = 0;
function BuyButton(alfa, beta) {


    fetch(`https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/db`)
        .then(async function (respon) {
            let dat = await respon.json();
            
            block.innerHTML += `
            <div class='trash'>
            <h3>Name: ${dat.product[alfa].name} </h3>
           <h4>Price: ${dat.product[alfa].price}</h4>
            <p><img src="${dat.product[alfa].photo_url}" ></p> 
            <hr>        
            </div>
           `;
           sum+=dat.product[alfa].price;
           
           let producta = dat.product.find(function (p) {
                return p.id == beta;
            })

            array_product.push(producta);
            console.log(array_product);

        })



}


function BuyAll(){
    block.innerHTML = ``;
    block.innerHTML = `<button onclick="BuyAll()" class="buy_all"></button>`;
    array_product = [];
}

function toggleBlock() {
    if (block.style.display === "none") {
        block.style.display = "flex";
    } else {
        block.style.display = "none";
    }
}