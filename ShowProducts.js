function appendProducts(el){
    var data_div = document.getElementById("data");
    
    var div = document.createElement("div");
    
    let img = document.createElement("img");
    
    img.src = el.image;

    let p_name = document.createElement("p");
    
    p_name.innerHTML = el.name;

    let p_price = document.createElement("p");
    
    p_price.innerHTML = "Rs. " + el.price;

    let btn = document.createElement("button");
    
    btn.textContent = "Add to Cart";
    
    btn.style.display = "block";
    
    btn.addEventListener("click",function(){
    
        addToCart(el);
    
    })

    div.append(img,p_name,p_price,btn);
    
    data_div.append(div);

}

function showProducts(){

    let data = JSON.parse(localStorage.getItem("products"))

    data.forEach(function(el){

        appendProducts(el);

    });

}

showProducts();

function addToCart(obj){

    let arr;

    arr = localStorage.getItem("visited");

    if(arr == null){
        
        arr = [];

        arr.push(obj);
        
        alert("Item added to cart successfully");
        
    }else{
        
        arr = JSON.parse(localStorage.getItem("visited"));
        
        var flag = 0;
        
        for(let i=0; i<arr.length;i++){
            
            if(arr[i].name == obj.name){
                
                flag = 1;
                
                break;
                
            }
            
        }
        
        if(flag == 0){
            
            arr.push(obj);
            
            alert("Item added to cart successfully");
            
        }
        if(flag == 1){
            
            alert("Item already present in cart");
            
        }
    }
    
    localStorage.setItem("visited",JSON.stringify(arr));

}