function addProduct(event) {
    event.preventDefault();
    let nom = document.getElementById("nom");
    let prix = document.getElementById("prix");
    let quantity = document.getElementById("quantity");
    let image = document.getElementById("image-input")
    let validation = true;
    //nom
    if (nom.value == "") {
        nom.classList.add("is-invalid");
        nom.classList.remove("is-valid");
        validation = false;
    }
    else {
        nom.classList.add("is-valid");
        nom.classList.remove("is-invalid");
    }
    //prix
    if (prix.value == "") {
        prix.classList.add("is-invalid");
        prix.classList.remove("is-valid");
        validation = false;
    }
    else {
        prix.classList.add("is-valid");
        prix.classList.remove("is-invalid");
    }
    //quantité
    if (quantity.value == "") {
        quantity.classList.add("is-invalid");
        quantity.classList.remove("is-valid");
        validation = false;
    }
    else {
        quantity.classList.add("is-valid");
        quantity.classList.remove("is-invalid");
    }
    //image
    if (image.value == "") {
        image.classList.add("is-invalid");
        image.classList.remove("is-valid");
        validation = false;
    }
    else {
        image.classList.add("is-valid");
        image.classList.remove("is-invalid");
    }

    if (validation == true) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        let id = Math.random().toString(36).substring(2);
        const prod = {
            id: id,
            nom: nom.value,
            prix: prix.value,
            quantity: quantity.value,
            image: image.value
        }
        btoa(image);
        products.push(prod);
        localStorage.setItem("products", JSON.stringify(products));
        window.open("listProduct.html", "_blank")
    }
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