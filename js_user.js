let content = document.getElementById("grid");
fetch('https://my-json-server.typicode.com/Chernushkin-Vlad/Project_1/db')
    .then(async function (respon) {
        let data = await respon.json();
        console.log(data);

        data.users.forEach(element => {
            content.innerHTML += `
            <div class="item"> 
            <h3>Name: ${element.name} </h3>
            <h4>Id: ${element.id}</h4>
            <p>${element.description}</p>
            <img src="${element.photo_url}" >
            <p><a href="Users.html?id=${element.author_id}">Seller profile</a></p>
        </div>
        `
        });
    })