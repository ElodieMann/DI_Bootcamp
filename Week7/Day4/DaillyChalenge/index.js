let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((element) => console.log(element));
};

displayGroceries();

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(user); 
  let shopping = groceries;
  groceries.totalPrice = '35$'
  console.log(shopping.totalPrice);
  groceries.paid = false
  console.log(shopping.paid);
};

cloneGroceries();

// for user it s betty because it s pass by value (string or number), it s a copy 
// for shopping.totalPrice and shopping.paid it s pass by reference so all modification after are also modified


