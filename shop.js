let products = [];
let dishwasher = {
    name: "Super Washer",
    price: "500kr",
    description: "A very washy washer!",
    image: "https://www.braultetmartineau.com/wcsstore/BMCatalogAssetStore/images/main/00339692_10_FRONT.png"
};
products.push(dishwasher);
let vaccumCleaner = {
    name: "Super Scucker",
    price: "500kr",
    description: "A very sucky sucker!",
    image: "http://www.pngpix.com/wp-content/uploads/2016/04/Office-Vacuum-Cleaner-PNG-image.png"
};
products.push(vaccumCleaner);
let fridge = {
    name: "Super fridge",
    price: "500kr",
    description: "A very fridgy fridger!",
    image: "https://cdn.pixabay.com/photo/2017/06/19/18/03/refrigerator-2420417_960_720.png"
};
products.push(fridge);
let mysteryBox = {
    name: "Super Mystery",
    price: "500kr",
    description: "A very mystic mystery!",
    image: "http://thepetplus.com/wp-content/uploads/2017/08/mysterbox.png"
};
products.push(mysteryBox);
let mysteryBox2 = {
    name: "Super Mystery",
    price: "500kr",
    description: "A very mystic mystery!",
    image: "http://thepetplus.com/wp-content/uploads/2017/08/mysterbox.png"
};
products.push(mysteryBox2);
let mysteryBox3 = {
    name: "Super Mystery",
    price: "500kr",
    description: "A very mystic mystery!",
    image: "http://thepetplus.com/wp-content/uploads/2017/08/mysterbox.png"
};
products.push(mysteryBox3);
let mysteryBox4 = {
    name: "Super Mystery",
    price: "500kr",
    description: "A very mystic mystery!",
    image: "http://thepetplus.com/wp-content/uploads/2017/08/mysterbox.png"
};
products.push(mysteryBox4);
let mysteryBox5 = {
    name: "Super Mystery",
    price: "500kr",
    description: "A very mystic mystery!",
    image: "http://thepetplus.com/wp-content/uploads/2017/08/mysterbox.png"
};
products.push(mysteryBox5);


let printOut = function (item, index) {
    let target = document.getElementById("printHere");
    let div = document.createElement("div");
    let headLine = document.createElement("h1");
    let headLineText = document.createTextNode(products[index].name);
    headLine.appendChild(headLineText);
    div.appendChild(headLine);
    let img = document.createElement("img");
    img.src = products[index].image;
    div.appendChild(img);
    let price = document.createElement("h2");
    let priceText = document.createTextNode(products[index].price);
    price.appendChild(priceText);
    div.appendChild(price);
    let description = document.createElement("p");
    let descriptionText = document.createTextNode(products[index].description);
    description.appendChild(descriptionText);
    div.appendChild(descriptionText);
    let button = document.createElement('a');
    let buttonText = document.createTextNode("Go to checkout!");
    button.href = "checkout.html";
    button.appendChild(buttonText);
    div.appendChild(button);

    target.appendChild(div);

    // document.getElementById("printHere").innerHTML = document.getElementById("printHere").innerHTML + products[index].name;

};


products.forEach(printOut);

document.getelements
// let para = document.createElement("p");
// let node = document.createTextNode("This is new.");
// let header1 = document.createElement("h1");
// let headNode = document.createTextNode("This is newer.");
// let img = document.createElement("img");
// img.src = "https://www.w3schools.com/howto/img_fjords.jpg";
// para.appendChild(node);
// header1.appendChild(headNode);
// let element = document.body;
// element.appendChild(header1);
// element.appendChild(para);
// element.appendChild(img);