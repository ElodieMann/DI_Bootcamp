SELECT * FROM rental WHERE return_date IS NULL;

SELECT customer.first_name, customer.last_name, customer.customer_id
FROM customer
INNER JOIN rental
ON customer.customer_id = rental.customer_id
WHERE return_date IS NULL;

CREATE VIEW action_films_with_joe_swank AS
SELECT actor.first_name, actor.last_name, category.name
FROM category
JOIN film_category ON category.category_id = film_category.category_id
JOIN film_actor ON film_category.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE category.name = 'Action' AND actor.first_name = 'Joe' AND actor.last_name = 'Swank';
