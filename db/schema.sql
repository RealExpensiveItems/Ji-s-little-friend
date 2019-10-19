DROP DATABASE IF EXISTS module_modal;
CREATE DATABASE module_modal;
USE module_modal;

CREATE TABLE fitable(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  typename TEXT NOT NULL
);

INSERT INTO fitable(typename)VALUE("boots");
INSERT INTO fitable(typename)VALUE("jackets");
INSERT INTO fitable(typename)VALUE("pants");

/*
mysql -u forest < db/schema.sql
*/