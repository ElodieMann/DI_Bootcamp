const productsItems = require("./products");

const findProducts = (name) => {
  const product = productsItems.find((item) =>  item.name === name);
  if(product) {
    console.log(product.name);
    console.log(product.price);
    console.log(product.category);
  }
};

findProducts("desk");
findProducts("computer");
findProducts("tshirt");
