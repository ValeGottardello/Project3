CREATE DATABASE stations_app;

CREATE TABLE stations(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  owner TEXT NOT NULL,
  address TEXT NOT NULL,
  suburb TEXT NOT NULL,
  state TEXT NOT NULL,
  latitude TEXT NOT NULL,
  longitude TEXT NOT NULL
);