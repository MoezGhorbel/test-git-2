function showProduct(){
    let id = localStorage.getItem("idToUpadate");
    console.log(id);
    let prod = products.find(y => y.id == id);
    document.getElementById("nom").value = prod.nom;
    document.getElementById("prix").value = prod.prix;
    document.getElementById("quantity").value = prod.quantity;
}

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});
document.getElementById("image_input").value = prod.image;
atob(Image);
function save() {
    let id = localStorage.getItem("idToUpadate");
    let prod = products.find(y => y.id == id);
    prod.nom = document.getElementById("nom").value;
    prod.prix = document.getElementById("prix").value;
    prod.quantity = document.getElementById("quantity").value;
    localStorage.setItem("products", JSON.stringify(products));
    document.location.href = "listProduct.html";
}