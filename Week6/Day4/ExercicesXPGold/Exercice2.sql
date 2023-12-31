UPDATE students SET birth_date = '02/11/1998' WHERE first_name = 'Lea' OR first_name = 'Marc' RETURNING first_name, last_name, birth_date;
UPDATE students SET last_name = 'Guez' WHERE first_name = 'David' RETURNING first_name, last_name;
DELETE FROM students WHERE first_name = 'Lea' RETURNING *;
SELECT count(*) FROM students;
SELECT count(*) FROM students WHERE birth_date > '01/01/2000';
ALTER TABLE students ADD COLUMN math_grade NUMERIC;
UPDATE students SET math_grade=80 WHERE id=1;
UPDATE students SET math_grade=90 WHERE id=2 OR id=4;
UPDATE students SET math_grade=40 WHERE id=6;
SELECT count(*) FROM students WHERE math_grade > 83;
INSERT INTO students (first_name, last_name, birth_date, math_grade) VALUES('Omer','Simpson','10/03/1980', 70);
SELECT first_name, last_name, COUNT(math_grade) AS total_grades FROM students GROUP BY first_name, last_name;
SELECT first_name, last_name, sum(math_grade) FROM students GROUP BY first_name, last_name;
