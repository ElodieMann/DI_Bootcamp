CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    item_id INTEGER,
    quantity_purchased INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
);
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'), 
    (SELECT id FROM items WHERE size = 'Fan'), 
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'), 
    (SELECT id FROM items WHERE size = 'Large desk'), 
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'), 
    (SELECT id FROM items WHERE size = 'Small desk'), 
    2
);

SELECT * FROM purchases;

SELECT *
FROM purchases
INNER JOIN customers
ON purchases.id = customers.id;

SELECT customers.first_name, customers.last_name, items.size
FROM customers 
INNER JOIN items
ON customers.id = items.id
INNER JOIN purchases
ON customers.id = purchases.id
GROUP BY customers.first_name, customers.last_name, items.size, purchases.quantity_purchased
HAVING purchases.quantity_purchased != 0;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'), 
    NULL, 
    1
);