BEGIN;
DROP TABLE IF EXISTS users ,articles,comments,ratings,tating_status,rating_status CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE articles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  contant TEXT NOT NULL,  
  image TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  auther VARCHAR(255) NOT NULL
);
CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  contant TEXT NOT NULL,
  user_id INT NOT NULL,
  article_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (article_id) REFERENCES articles(id)ON DELETE CASCADE
);
CREATE TABLE ratings( 
  user_id INT NOT NULL,
  article_id INT NOT NULL,
  rating FLOAT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  PRIMARY KEY(user_id,article_id)
);
CREATE Table rating_status(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  user_id INT NOT NULL,
  article_id INT NOT NULL,
  FOREIGN KEY(user_id,article_id) REFERENCES ratings (user_id,article_id)
);

INSERT INTO users (username, email, password) VALUES 
  ('farah', 'farah@gmail.com', 'fhgfhgfhgjghjhgjj'),
  ('aya', 'farah@gmail.com', 'fhgfhgfhgjghjhgjj');

INSERT INTO articles(title, contant,  image, email,auther) VALUES 
  ('article 1', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah'),
    ('article 2', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah'),
      ('article 3', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah');

INSERT INTO comments (contant, article_id ,user_id) VALUES
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 ),
('This is the first comment', 1,1 );
INSERT INTO ratings (user_id,article_id,rating) VALUES
( 1,1,3),
( 1,3,5 );

INSERT INTO rating_status (title,user_id,article_id) VALUES('good',1,1);


-- INSERT INTO comments (contant, created_by,article_id) VALUES
-- ('This is the first comment', 1,2 ),
-- ('This is the first comment', 1,2 ),
-- ('This is the first comment', 1,2 );




COMMIT;
