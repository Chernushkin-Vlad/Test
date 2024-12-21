const content = document.getElementById("grid");
const user_cotent = document.getElementById("user");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const block = document.getElementById("block");
let product_position = 0;
const my_headers = {
    "Content-Type": "application/json",
    "x-apikey": "675dbe5c7aaf6151e8b53c49",
    "cache-control": "no-cache"
}


fetch('https://tammi-3685.restdb.io/rest/product', {
    method: 'GET',
    headers: my_headers
})
    .then(async function (respon) {
            let data = await respon.json();

console.log(data)
        data.forEach(element => {

            content.innerHTML += `
                <div class="item"> 
                <h3>Name: ${element.name} </h3>
                <h4>Id: ${element.id}</h4>
                <p>${element.description}</p>
                <img src="${element.photo_url}" >
            <p><a href="Users.html?id=${element.author_id}">Seller profile</a></p>
            <p><button onclick="BuyButton(${product_position},'${element._id}')" > Buy </button></p>
            </div>
            `
            product_position++;
        });

    })

let array_product = [];
function BuyButton(alfa, beta) {


    fetch('https://tammi-3685.restdb.io/rest/product', {
        method: 'GET',
        headers: my_headers
    })
        .then(async function (respon) {
            let dat = await respon.json();

            block.innerHTML += `
            <div class='trash'>
            <h3>Name: ${dat[alfa].name} </h3>
           <h4>Price: ${dat[alfa].price}</h4>
            <p><img src="${dat[alfa].photo_url}" ></p> 
            <hr>        
            </div>
           `;

            let producta = dat.find(function (p) {
                return p._id == beta;
            })

            array_product.push(producta);
            console.log(array_product);

        })


}


function BuyAll() {
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