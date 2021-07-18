function addProduct(){

    let form = document.getElementById("myForm");

    var name = form.name.value;
    var price = form.price.value;
    var image = form.img.value;

    let product = {
        name,
        price,
        image,
    }

    let arr;

    arr = localStorage.getItem("products");

    if(arr == null){
        
        arr = [];

    }else{

        arr = JSON.parse(localStorage.getItem("products"));
    
    }
    
    arr.push(product);

    localStorage.setItem("products",JSON.stringify(arr));
}

function showProduct(){
    
    window.location.href = "ShowProducts.html";

}