CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    customer_name VARCHAR(255)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INTEGER,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
);

INSERT INTO product_orders (order_date, customer_name) VALUES
    ('2023-08-08', 'Customer A'),
    ('2023-08-09', 'Customer B'),
    ('2023-08-10', 'Customer C');

INSERT INTO items (order_id, product_name, price) VALUES
    (1, 'Product 1', 50.00),
    (1, 'Product 2', 30.00),
    (2, 'Product 3', 25.00),
    (3, 'Product 4', 15.00),
    (3, 'Product 5', 10.00),
    (3, 'Product 6', 5.00);
CREATE OR REPLACE FUNCTION total_price(o_id INTEGER) 
RETURNS INTEGER AS $price$
DECLARE total INTEGER;
BEGIN
  SELECT SUM(price) INTO total FROM items WHERE order_id = o_id;
  RETURN total;
END;
$price$ LANGUAGE plpgsql;

SELECT total_price(1);