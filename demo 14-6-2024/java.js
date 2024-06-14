function rangeRNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function textColorChange() {
    this.changeColorText.style.color = 'rgb(' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ')';
}
const container = {
//getProduct = getProduct.bind();
//clearProduct = clearProduct.bind();
//displayProduct = displayProduct.bind();

getButton = document.getElementById("get-product-button");
clearButton = document.getElementById("clear-product-button");
displayResult = document.getElementById("get-clear-product-result");
displayButton = document.getElementById("display-button");
displayProductText = document.getElementById("display-product-text");

product = null;
fetched = false;
numProduct = 0;
id = 0;
}
async function getProduct(){
    if (container.fetched){
         return JSON.parse(sessionStorage.getItem("products"\));
    }
    container.product = await fetch("https://dummyjson.com/products");
    container.product = await product.json();
    sessionStorage.setItem("products",JSON.stringify(product));
    console.log(container.product);
    container.displayProduct.textContent = "Got product";
    container.fetched = true;
}

addEvent = {
    getButton.addEventListener("click",getProduct);
    getButton.addEventListener("click",() => setTimeout(getProduct,2000));
    clearButton.addEventListener("click",this.clearProduct);
    displayButton.addEventListener("click",this.displayProduct);

}
