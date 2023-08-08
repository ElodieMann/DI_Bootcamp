SELECT film.rating, film.title
FROM film 
JOIN inventory 
ON film.film_id = inventory.film_id
JOIN rental 
ON inventory.inventory_id = rental.inventory_id
WHERE (film.rating = 'G' OR film.rating = 'PG') AND (rental.return_date IS NOT NULL OR rental.rental_date IS NULL);

CREATE TABLE waiting_list (
    id SERIAL PRIMARY KEY,
    child_name VARCHAR(255) NOT NULL,
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES film(film_id)
);

INSERT INTO waiting_list (child_name, movie_id) VALUES ('Alice', 1);
INSERT INTO waiting_list (child_name, movie_id) VALUES ('Bob', 1);
INSERT INTO waiting_list (child_name, movie_id) VALUES ('Charlie', 2);

SELECT movie_id, COUNT(*) AS num_waiting
FROM waiting_list
GROUP BY movie_id;



