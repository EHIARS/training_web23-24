var product = null;
    var fetched = false;
    var numProduct = 0;
    var id = 0;
//}
async function getProduct(){
    if (fetched){
        return JSON.parse(sessionStorage.getItem("products"));
    }
    product = await fetch("https://dummyapi-0uzr.onrender.com/products");
    product = await product.json();
    sessionStorage.setItem("products",JSON.stringify(product));
    console.log(product);
    displayProduct.textContent = "Got product";
    fetched = true;
}

function add_data(product,ham){
    ham;
    if (product.tag){
        product.tag = capitaliFirstLetter(product.tag)
    }
    if (product.image){
        product = "data:image/png;base64"+product.image;
    }
    const markup = `<div class="container" id ="${product.name}">
        <img scr="${product.image}" alt="${product.name} class="product_image " >
        <p class="discount" >${product.discount ? `-${product.discount}` : ""}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-discription">${product.short_disc}</p>
        <h4 class="price">Rp ${product.price}</h4>
        <p class="product-oldprice"><del>${product.old_price ? product.old_price : ""}</del></p>
        <div class="product-hover-unity">
            <button id="add-to-cart">Add to cart</button>
        </div>
    </div>`;
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    const element = document.getElementById("Our-Products");
    element.appendChild(para);
}
add_data(product,getProduct);