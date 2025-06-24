CREATE DATABASE db_blog_post;

USE db_blog_post;

create table users(
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

create table blog_post(
  id INT PRIMARY KEY,
  title VARCHAR(100),
  body TEXT,
  author_id INT
);

create table post_categories(
  post_id INT,
  category_id INT
);

create table categories(
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

ALTER TABLE blog_post
ADD FOREIGN KEY (author_id) REFERENCES users(id);

ALTER TABLE post_categories
ADD FOREIGN KEY (post_id) REFERENCES blog_post(id);

ALTER TABLE post_categories
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

INSERT INTO users(id, name)
VALUES
(1, "John Doe"),
(2, "Robert"),
(3, "Frank"),
(4, "Jane")

INSERT INTO blog_post(id, title, body, author_id)
VALUES
(1, "Algorithm", "this is article for algorithm", 1),
(2, "Lorem Ipsum", "lorem ipsum dolor sit amet", 1),
(3, "NodeJS", "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.", 2),
(4, "ReactJS", "ReactJS is JavaScript library for building user interfaces", 4),
(5, "Git", "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency", 3),
(6, "Basketball", "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop", 2)

INSERT INTO categories(id, name)
VALUES
(1, "Basic"),
(2, "Library"),
(3, "Unknown"),
(4, "Sport")

INSERT INTO post_categories(post_id, category_id)
VALUES
(1, 1),
(2, 3),
(3, 1),
(3, 2),
(4, 2),
(4, 1),
(5, 1),
(6, 4)

-- tampilkan seluruh data posts yang ditulis oleh john doe
SELECT *
FROM blog_post
INNER JOIN users ON blog_post.id=users.id
WHERE name="John Doe";

-- tampilkan category name, post title, author name yang memiliki category basic saja
SELECT categories.name, blog_post.title, users.name
FROM post_categories
INNER JOIN categories ON categories.id = post_categories.category_id
INNER JOIN blog_post ON blog_post.id = post_categories.post_id
INNER JOIN users ON users.id = blog_post.author_id
WHERE categories.name="Basic";

-- tampilkan category name, post title, dan body yang ditulis oleh robert dan frank
SELECT categories.name, blog_post.title, blog_post.body
FROM post_categories
INNER JOIN categories ON categories.id = post_categories.category_id
INNER JOIN blog_post ON blog_post.id = post_categories.post_id
INNER JOIN users ON users.id = blog_post.author_id
WHERE users.name="Robert" OR users.name="Frank";

-- tampilkan nama penulis dan nama category untuk artikel yang memiliki lebih dari atau sama dengan dua category
SELECT users.name AS author_name, categories.name AS categories_name
FROM blog_post
JOIN users ON blog_post.author_id = users.id
JOIN post_categories ON blog_post.id = post_categories.post_id
JOIN categories ON post_categories.category_id = categories.id
WHERE blog_post.id IN (
  SELECT post_id
  FROM post_categories
  GROUP BY post_id
  HAVING COUNT(category_id) >= 2
)
ORDER BY blog_post.id, categories.name;

-- tampilkan nama penulis dan pos title untuk artikel yang memilik hanya 1 category saja
SELECT users.name AS author_name, blog_post.title AS post_title
FROM blog_post
JOIN users ON blog_post.author_id = users.id
WHERE blog_post.id IN (
  SELECT post_id
  FROM post_categories
  GROUP BY post_id
  HAVING COUNT(category_id) = 1
)
ORDER BY blog_post.id;
