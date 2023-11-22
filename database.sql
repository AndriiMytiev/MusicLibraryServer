create TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(100),
    password VARCHAR(50),
    isAdmin BOOLEAN,
)