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

