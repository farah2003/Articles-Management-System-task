BEGIN;
DROP TABLE IF EXISTS users ,articles,comments,ratings CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
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
  created_by INT NOT NULL,
  article_id INT NOT NULL,
  FOREIGN KEY (created_by) REFERENCES users(id),
  FOREIGN KEY (article_id) REFERENCES articles(id)ON DELETE CASCADE
);
CREATE TABLE ratings(
  scoring_by INT NOT NULL,
  article_id INT NOT NULL,
  rating FLOAT NOT NULL,
  FOREIGN KEY (scoring_by) REFERENCES users(id),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  PRIMARY KEY(scoring_by,article_id)
);

-- INSERT INTO users (username, email, password) VALUES 
--   ('farah', 'farah@gmail.com', 'fhgfhgfhgjghjhgjj');

-- INSERT INTO articles(title, contant,  image, email,auther) VALUES 
--   ('article 1', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah'),
--     ('article 2', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah'),
--       ('article 3', 'This is the first article', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'farah@gmail.com','farah');

-- INSERT INTO comments (contant, created_by,article_id) VALUES
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 ),
-- ('This is the first comment', 1,1 );



-- INSERT INTO comments (contant, created_by,article_id) VALUES
-- ('This is the first comment', 1,2 ),
-- ('This is the first comment', 1,2 ),
-- ('This is the first comment', 1,2 );

-- INSERT INTO ratings (scoring_by,article_id,rating) VALUES
-- ( 1,1,3),
-- ( 1,3,5 );


COMMIT;
