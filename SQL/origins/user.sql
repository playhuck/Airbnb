
INSERT INTO user VALUES ('userId', 'nickname', 'email', 'password');

CREATE TABLE (
    uid INT NOT NULL PRIMARY KEY AUTO_INCRMENT,
    userId varchar(50) NOT NULL,
    nickname varchar(50) NOT NULL UNIQUE KEY,
    email varchar(50) NOT NULL,
    password varchar(255) NOT NULL
)