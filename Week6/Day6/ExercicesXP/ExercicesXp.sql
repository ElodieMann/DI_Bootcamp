SELECT * FROM language;

SELECT film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name
FROM film
FULL OUTER JOIN language
ON film.language_id = language.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
    ('The Matrix'),
    ('The Shawshank Redemption'),
    ('Forrest Gump'),
    ('Avatar'),
    ('The Lord of the Rings'),
    ('Jurassic Park');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255),
    score  INTEGER,
    review_text TEXT,
    last_update TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) 
VALUES
    ((SELECT id FROM new_film WHERE name = 'The Matrix'), 
     (SELECT language_id FROM language WHERE name = 'English'),
     'Great Film',
     9,
     'Very Good.',
     CURRENT_TIMESTAMP),
    ((SELECT id FROM new_film WHERE name = 'Avatar'), 
     (SELECT language_id FROM language WHERE name = 'English'),
     'Very Good',
     8,
     'Awesome.',
     CURRENT_TIMESTAMP);
DELETE FROM new_film WHERE id=1;
SELECT * FROM customer_review;

UPDATE film SET language_id=3 WHERE rental_rate < 3;
DROP TABLE IF EXISTS customer_review;
SELECT * FROM rental;
SELECT count(*) FROM rental WHERE return_date IS NULL;
SELECT film.title, rental.rental_date, inventory.inventory_id, film.rental_rate
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT film.title,film.description, actor.first_name, actor.last_name 
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE film.description LIKE '%sumo wrestler%' AND  actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

SELECT film.title,film.length, film.rating, category.name 
FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON category.category_id = film_category.category_id
WHERE film.length < 60 AND film.rating = 'R' AND category.name = 'Documentary';
SELECT customer.first_name, customer.last_name, rental.return_date, film.rental_rate, film.title
FROM customer
INNER JOIN rental
ON customer.customer_id = rental.customer_id
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE film.rental_rate > 4 AND customer.first_name ='Matthew' AND customer.last_name ='Mahan' AND rental.return_date BETWEEN '28/07/2005' AND '01/08/2005';

SELECT customer.first_name, customer.last_name, rental.return_date, film.rental_rate, film.title
FROM customer
INNER JOIN rental
ON customer.customer_id = rental.customer_id
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE (film.title LIKE '%boat%' OR film.description LIKE '%boat%')  AND customer.first_name ='Matthew' AND customer.last_name ='Mahan'
ORDER BY replacement_cost DESC