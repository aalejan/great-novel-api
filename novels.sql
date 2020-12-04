CREATE DATABASE novels;

use novels;

CREATE TABLE authors(
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
)

CREATE TABLE novels(
    id INT auto_increment,
    title VARCHAR(255),
    autorId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(authorId) REFERENCES authors(id)
)

CREATE TABLE genres(
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
)

CREATE TABLE novels_genres_link(
    novelsId INT,
    genresId INT,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(novelsID, genresId)
    FOREIGN KEY(novelsId) REFERENCES novels(id),
    FOREIGN KEY(genresId) REFERENCES genres(id)
)

INSERT INTO authors(name) VALUES ('Bram Stoker');
INSERT INTO authors(name) VALUES ('Oscar Wilde');
INSERT INTO authors(name) VALUES ('Alice Walker');
INSERT INTO authors(name) VALUES ('Leo Tolstoy');
INSERT INTO authors(name) VALUES ('Charles Dickens');
INSERT INTO authors(name) VALUES ('Arthur Miller');
INSERT INTO authors(name) VALUES ('Alexandre Dumas');
INSERT INTO authors(name) VALUES ('Arthur Conan Doyle');
INSERT INTO authors(name) VALUES ('Robert Louis Stevenson');
INSERT INTO authors(name) VALUES ('Fyodor Dostoyevsky');
INSERT INTO authors(name) VALUES ('Agatha Christie');
INSERT INTO authors(name) VALUES ('Ray Bradbury');
INSERT INTO authors(name) VALUES ('Georfe Orwell');
INSERT INTO authors(name) VALUES ('H.G. Wells');
INSERT INTO authors(name) VALUES ('Chinua Achebe');


INSERT INTO novels(title, authorId) VALUES('Dracula', 1);
INSERT INTO novels(title, authorId) VALUES('The Picture of Dorian Gray', 2);
INSERT INTO novels(title, authorId) VALUES('The Color Purple', 3);
INSERT INTO novels(title, authorId) VALUES('War and Peace', 4);
INSERT INTO novels(title, authorId) VALUES('A Tale of Two Cities', 5);
INSERT INTO novels(title, authorId) VALUES('The Crucible', 6);
INSERT INTO novels(title, authorId) VALUES('The Three Musketeers', 7);
INSERT INTO novels(title, authorId) VALUES('The Hound of the Baskervilles', 8);
INSERT INTO novels(title, authorId) VALUES('The Strange Case of Dr. Jekyll and Mr. Hyde', 9);
INSERT INTO novels(title, authorId) VALUES('Crime and Punishment', 10);
INSERT INTO novels(title, authorId) VALUES('Murder on the Orient Express', 11);
INSERT INTO novels(title, authorId) VALUES('Fahrenheit', 12);
INSERT INTO novels(title, authorId) VALUES('Animal Farm', 13);
INSERT INTO novels(title, authorId) VALUES('The Time Machine', 14);
INSERT INTO novels(title, authorId) VALUES('Things Fall Apart', 15);


INSERT INTO genres(name) VALUES ('Adventure');
INSERT INTO genres(name) VALUES ('African Literature');
INSERT INTO genres(name) VALUES ('Crime');
INSERT INTO genres(name) VALUES ('Drama');
INSERT INTO genres(name) VALUES ('Dyystopia');
INSERT INTO genres(name) VALUES ('Fantasy');
INSERT INTO genres(name) VALUES ('Fiction');
INSERT INTO genres(name) VALUES ('French Literature');
INSERT INTO genres(name) VALUES ('Gothic');
INSERT INTO genres(name) VALUES ('Historical Fiction');
INSERT INTO genres(name) VALUES ('Horror');
INSERT INTO genres(name) VALUES ('Mystery');
INSERT INTO genres(name) VALUES ('Plays');
INSERT INTO genres(name) VALUES ('Russian Literature');
INSERT INTO genres(name) VALUES ('Science Fiction');
INSERT INTO genres(name) VALUES ('Thriller');
INSERT INTO genres(name) VALUES ('Time Travel');
INSERT INTO genres(name) VALUES ('War');


INSERT INTO novels_genres_link(novelsId, genresId) VALUES(1, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(1, 11);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(1, 6);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(2, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(2, 11);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(2, 9);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(2, 6);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(3, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(3,10);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(4, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(4, 10);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(4,18);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(4,14);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(5, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(5, 10);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(6, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(6, 10);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(6, 4);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(6, 13);


INSERT INTO novels_genres_link(novelsId, genresId) VALUES(7, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(7, 10);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(7, 1);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(7, 8);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(8, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(8, 12);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(8, 3);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(8, 16);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(9, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(9, 12);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(9, 15);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(9, 11);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(10,7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(10, 14);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(10, 12);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(11, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(11, 12);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(12, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(12, 15);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(12, 5);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(13, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(13, 15);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(13, 5);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(14, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(14, 15);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(14, 17);

INSERT INTO novels_genres_link(novelsId, genresId) VALUES(15, 7);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(15, 10);
INSERT INTO novels_genres_link(novelsId, genresId) VALUES(15, 2);


