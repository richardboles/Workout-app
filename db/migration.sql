\c workouts_db;
DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
id SERIAL PRIMARY KEY,
Sunday varchar,
Monday varchar(255),
Tuesday varchar(255),
Wednesday varchar(255),
Thursday varchar(255),
Friday varchar(255),
Saturday varchar(255)
);


