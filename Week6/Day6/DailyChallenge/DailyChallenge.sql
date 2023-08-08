CREATE TABLE customer (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50),
 last_name VARCHAR (100) NOT NULL
);
CREATE TABLE customer_profile(
 id SERIAL PRIMARY KEY,
 isLoggedIn BOOLEAN DEFAULT false,
 customer_id INTEGER,
	FOREIGN KEY(customer_id) REFERENCES customer(id)
);

INSERT INTO customer(first_name, last_name)
VALUES ('John', 'Doe'),
('Jerome', 'Lalu'),
 ('Lea', 'Rive');

-- Insert Customer profiles
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
    true,
    (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);

INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
    false,
    (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);
SELECT customer.first_name, customer_profile.isLoggedIn
FROM customer 
INNER JOIN customer_profile ON customer.id = customer_profile.customer_id
WHERE customer_profile.isloggedin = true

SELECT customer.first_name, customer_profile.isLoggedIn
FROM customer 
LEFT OUTER JOIN customer_profile ON customer.id = customer_profile.customer_id;

SELECT count(customer)
FROM customer 
INNER JOIN customer_profile ON customer.id = customer_profile.customer_id
WHERE customer_profile.isloggedin = false

CREATE TABLE book (
 book_id SERIAL PRIMARY KEY,
 title VARCHAR (100)  NOT NULL,
 author VARCHAR (100)  NOT NULL
);
INSERT INTO book (title, author)
VALUES 
 ('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')
;
CREATE TABLE student (
 student_id SERIAL PRIMARY KEY,
 name VARCHAR (100)  NOT NULL,
 age INTEGER CHECK (age <= 15)
);
INSERT INTO student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

CREATE TABLE library (
  book_fk_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
	borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_id),
  FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_id) REFERENCES student(student_id)  ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);

INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

SELECT * FROM library;
SELECT student.name, book.title, library.borrowed_date
FROM library 
JOIN book ON book.book_id = library.book_fk_id
JOIN student ON student.student_id = library.book_fk_id;
SELECT avg(student.age) AS average_age 
FROM student 
JOIN library ON student.student_id = library.book_fk_id
JOIN book ON book.book_id = library.book_fk_id
WHERE Book.title = 'Alice In Wonderland';
DELETE FROM student WHERE name = 'Bob';
SELECT * FROM library;
