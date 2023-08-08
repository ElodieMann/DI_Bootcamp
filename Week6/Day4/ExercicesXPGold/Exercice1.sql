SELECT rating, COUNT(*) FROM film GROUP BY rating;
SELECT * FROM film WHERE rating = 'G' OR rating = 'PG-13';
SELECT * FROM film WHERE (rating = 'G' OR rating = 'PG-13') AND length < 120 AND rental_rate < 3 ORDER BY title ASC;
SELECT * FROM customer WHERE first_name = 'Elodie';
UPDATE customer SET first_name = 'Elodie', last_name='Mann', email='elodie.el1409@gmail.com' WHERE first_name='Jared' and last_name='Ely' RETURNING *;
SELECT address, district, postal_code FROM address WHERE address_id = 530;
UPDATE address SET address = 'Bareket', district='Ashdod', postal_code='777456' WHERE address_id = 530 RETURNING *;



