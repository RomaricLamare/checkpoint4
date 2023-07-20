-- Active: 1685625000744@@127.0.0.1@3306@my_fav_bands
DROP DATABASE IF EXISTS `my_fav_bands`;

CREATE DATABASE `my_fav_bands`;

USE `my_fav_bands`;

DROP TABLE IF EXISTS `band`;

DROP TABLE IF EXISTS `admin`;

CREATE TABLE IF NOT EXISTS `band` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `genre` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50),
  `fav_album` VARCHAR(100) NOT NULL,
  `link` VARCHAR(200) NOT NULL,
  `facebook` VARCHAR(200),
  `instagram` VARCHAR(200),
  `album_link` VARCHAR(300),
  `image` VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);


INSERT INTO band (name, genre, country, fav_album, link, facebook, instagram, album_link, image) VALUES 
('Depeche Mode', 'New Wave / Synth-Pop', 'England', 'Music for the Masses', 'www.depechemode.com', 'https://www.facebook.com/depechemode/', 'https://www.instagram.com/depechemode/', 'https://open.spotify.com/intl-fr/album/06we4RiGhODMsbAPWmogy2', 'https://i.ytimg.com/vi/aGSKrC7dGcY/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLBUYo0pojry7RygqB70F_vZfdDHCA'),
('Entombed', 'Death Metal', 'Sweden', 'Wolverine Blues', 'https://fr.wikipedia.org/wiki/Entombed', 'https://www.facebook.com/entombedsverige', 'https://www.instagram.com/entombed/', 'https://open.spotify.com/intl-fr/track/6WBdwdLLif4kuG3s6ot8uB', 'https://www.spirit-of-metal.com/les%20goupes/E/Entombed/pics/eba2_3.jpg'),
('Klone', 'Progressive Rock / Metal', 'France', 'Here Comes the Sun', 'https://fr.wikipedia.org/wiki/Klone', 'https://www.facebook.com/kloneband', 'https://www.instagram.com/kloneband/', 'https://open.spotify.com/intl-fr/album/0guXNAlpBwNotzJxNiI9SP', 'https://www.le7.info/media/cache/article/uploads/photos/63e1f04204010.jpeg'),
('Bohren & Der Club of Gore', 'Ambient Jazz', 'Germany', 'Black Earth', 'https://www.bohrenundderclubofgore.com/', 'https://www.facebook.com/bohrenofficial', 'https://www.instagram.com/bohrenundderclubofgore/', 'https://open.spotify.com/intl-fr/album/2xDo02ZrqGjkkOcsm35E5L', 'https://popnrw.de/wp-content/uploads/2017/05/BUDCUG-Tanja-de-Maan-3-Kopie.jpg'),
('Alice in Chains', 'Sludge / Grunge / Metal', 'USA', 'Dirt', 'https://aliceinchains.com/', 'https://www.facebook.com/aliceinchains', 'https://www.instagram.com/aliceinchains/', 'https://open.spotify.com/intl-fr/album/58NXIEYqmq5dQHg9nV9duM', 'https://cms.kerrang.com/images/2021/03/_1200x630_crop_center-center_82_none/Alice-In-Chains-1995-press-shot-credit-Rocky-Schenck.jpg?mtime=1617099007'),
('Neil Young', 'Folk', 'USA', 'Live at Massey Hall', 'https://neilyoungarchives.com', 'https://www.facebook.com/NeilYoungRepriseRecords', 'https://www.instagram.com/neilyoungarchives/', 'https://open.spotify.com/playlist/1LhIdDK8V19fceiYVa9cBf', 'https://www.ilikeyouroldstuff.com/sites/g/files/g2000009801/files/inline-images/neil-young_4.jpg'),
('Power Trip', 'Hardcore / Thrash Metal', 'USA', 'Nightmare Logic', 'https://en.wikipedia.org/wiki/Power_Trip_(band)', 'https://www.facebook.com/powertripTX', 'https://www.instagram.com/powertriptx/', 'https://open.spotify.com/intl-fr/album/3suNG9n4WGYQabXhUTkQ70', 'https://www.spirit-of-metal.com/les%20goupes/P/Power%20Trip%20(USA-2)/pics/ce4f_1.jpg'),
('Metallica', 'Speed / Thrash Metal', 'USA', 'Master of Puppets', 'https://www.metallica.com', 'https://www.facebook.com/Metallica', 'https://www.instagram.com/metallica/', 'https://open.spotify.com/intl-fr/track/2MuWTIM3b0YEAskbeeFE1i', 'https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/07/metallica-1991.jpeg');

INSERT INTO `user` (username, email, password) VALUES ('Romaric', 'romariclamare@gmail.com', 'root');