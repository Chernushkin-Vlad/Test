const content = document.getElementById("grid");
let add_product = document.getElementById("add_product");
let status_add = document.getElementById("status");
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

add_product.addEventListener("submit", async function (event) {
event.preventDefault();
    let data = {
        name: event.target['name'].value,
        description: event.target['description'].value,
        price: event.target['price'].value,
        photo_url: event.target['photo_url'].value
    };


    try {
        const response = await fetch('https://tammi-3685.restdb.io/rest/product', {
            method: 'POST',
            headers: my_headers,
            body: JSON.stringify(data)
        });

        if(response.ok){
            const result = await response.JSON();
    status_add.innerHTML = `ID: ${result}`;
        }
        else{
            throw new Error(`Problem: ${respon.status}`);
        }

    }
    catch(error){}
    
    
});