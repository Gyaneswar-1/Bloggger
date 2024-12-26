-- user database table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_password VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pfp VARCHAR(400) DEFAULT NULL,
    bio VARCHAR(400) DEFAULT NULL
);

-- blog database table
CREATE TABLE blogs(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    images VARCHAR(400) DEFAULT NULL
);

-- delete blog
DELETE FROM blogs WHERE id='38' AND user_id='20' RETURNING *
SELECT * FROM blogs;

--added new field to the blog db
ALTER table blogs ADD images VARCHAR(400) DEFAULT NULL;

--insert into blogs
INSERT INTO blogs (title,content,user_id,images) VALUES
('spider man exposed!!' , 'spider man is a 16 year old highschool guy his name is peater parker',70,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlVhsONH57akBZYZyExGw-n3r4vfXNbffgL4dCXSXDJV9WRYLGqQlRBK2a4cZFMEInwQ9b');


-- join tables
SELECT users.*
FROM blogs
JOIN users ON blogs.user_id = users.id
WHERE blogs.user_id = 70;

-- created comment model
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    blog_id INT REFERENCES blogs(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);

-- created follows
CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    follower_id INT REFERENCES users(id) ON DELETE CASCADE,  -- The user who is following
    followed_id INT REFERENCES users(id) ON DELETE CASCADE   --the user being followed
)


CREATE TABLE follows(
  id SERIAL PRIMARY KEY,
  follower_id INT REFERENCES user(id) ON DELETE CASCADE,
  followed_id INT REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (follower_id, followed_id)
);  

-- insert into follow table 
INSERT INTO follows (follower_id,followed_id) VALUES 
(91,93);


-- update the blog table

UPDATE blogs SET title = 'new_title', 
    content = 'new_content',
    images = 'new_images',
    updated_at = NOW()
WHERE id = 93;

-- user like
CREATE TABLE user_likes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    blog_id INT NOT NULL,
    like_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)  ON DELETE CASCADE,
    FOREIGN KEY (blog_id) REFERENCES blogs(id)  ON DELETE CASCADE,
    UNIQUE (user_id, blog_id)
);