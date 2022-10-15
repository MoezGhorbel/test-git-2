let products = JSON.parse(localStorage.getItem("products")) || [];
function showList() {
    let list = ``;
    let i = 1;
    products.forEach(element => {
        list += `
        <tr>
        <th>${i}</th>
        <th>${element.nom}</th>
        <th>${element.prix}</th>
        <th>${element.quantity}</th>
        <th><button  type="button" class="btn btn-success" onClick="updateItem(${i - 1})">update</button></th>
        <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i - 1})">delete</button></th>
    </tr>
`
        i++;
    });
    document.getElementById("table").innerHTML = list;
}

function updateItem(x) {
    console.log(x);
    let products = JSON.parse(localStorage.getItem("products"))
    console.log(products[x].id);
    localStorage.setItem("idToUpadate", products[x].id);
    window.open("updateProduct.html","_self");
}

function deleteItem(x) {
    products.splice(x, 1);
    localStorage.setItem("products", JSON.stringify(products));
    showList();
}
