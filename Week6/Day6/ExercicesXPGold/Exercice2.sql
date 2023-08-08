SELECT COUNT(store_id) AS number_of_stores, city, country
FROM store
JOIN address ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
GROUP BY city, country;

SELECT store.store_id, SUM(film.length) AS total_viewing
FROM store 
JOIN inventory  ON store.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
GROUP BY store.store_id;

SELECT store.store_id, SUM(film.length) AS total_viewing
FROM store 
JOIN inventory  ON store.store_id = inventory.store_id
JOIN film ON inventory.film_id = film.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NOT NULL
GROUP BY store.store_id;

SELECT customer.first_name, customer.last_name, city.city, store.store_id
FROM customer 
JOIN store  ON customer.store_id = store.store_id
JOIN address  ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id;

SELECT customer.first_name, customer.last_name, country.country, store.store_id
FROM customer 
JOIN store  ON customer.store_id = store.store_id
JOIN address  ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;

ALTER TABLE film
ADD CONSTRAINT check_safe_movie
CHECK (
    NOT (
        title LIKE '%beast%' OR
        title LIKE '%monster%' OR
        title LIKE '%ghost%' OR
        title LIKE '%dead%' OR
        title LIKE '%zombie%' OR
        title LIKE '%undead%' OR
        description LIKE '%beast%' OR
        description LIKE '%monster%' OR
        description LIKE '%ghost%' OR
        description LIKE '%dead%' OR
        description LIKE '%zombie%' OR
        description LIKE '%undead%'
    )
);

CREATE VIEW safe AS
SELECT title, description
FROM film
WHERE NOT EXISTS (
    SELECT 1
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE fc.film_id = film.film_id AND c.name = 'Horror'
);

SELECT SUM(length) AS total_length
FROM film
WHERE film_id IN (SELECT film_id FROM safe);


SELECT
    SUM(length) AS total_minutes,
    SUM(length) / 60 AS total_hours,
    SUM(length) / (60 * 24) AS total_days
FROM film;

SELECT
    SUM(length) AS total_minutes_safe,
    SUM(length) / 60 AS total_hours_safe,
    SUM(length) / (60 * 24) AS total_days_safe
FROM film
WHERE film_id IN (SELECT film_id FROM safe_list);