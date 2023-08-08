SELECT first_name, last_name FROM customers ORDER BY first_name DESC LIMIT 2;

DELETE FROM purchases WHERE id = (SELECT id FROM customers WHERE first_name = 'Scott');
SELECT * FROM customers;

SELECT *
FROM purchases
LEFT OUTER JOIN customers
ON purchases.id = customers.id;

SELECT *
FROM purchases
LEFT OUTER JOIN customers
ON purchases.id = customers.id
WHERE NOT (customers.first_name IS NULL AND customers.last_name IS NULL);
