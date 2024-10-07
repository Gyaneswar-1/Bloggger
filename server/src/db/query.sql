-- user database table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_password VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- blog database table
CREATE TABLE blogs(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- delete blog
DELETE FROM blogs WHERE id='38' AND user_id='20' RETURNING *
SELECT * FROM blogs;

--added new field to the blog db
ALTER table blogs ADD images VARCHAR(400) DEFAULT NULL;

--insert into blogs
INSERT INTO blogs (title,content,user_id,images) VALUES
('spider man exposed!!' , 'spider man is a 16 year old highschool guy his name is peater parker',70,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlVhsONH57akBZYZyExGw-n3r4vfXNbffgL4dCXSXDJV9WRYLGqQlRBK2a4cZFMEInwQ9b');



SELECT users.*
FROM blogs
JOIN users ON blogs.user_id = users.id
WHERE blogs.user_id = 70;