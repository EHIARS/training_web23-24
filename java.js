function add_data(product){
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
        <p class="product-oldprice"><del>${product.old_price ? product,old_price : ""}</del></p>
        <div class="product-hover">

        </div>
    </div>`;
    
}