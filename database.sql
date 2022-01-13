-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


-- Database name: shopping_list

-- The decimals works like this: 
-- the first number represents how many numbers total
-- the second number represents how many numbers after the decimal
CREATE TABLE "groceries" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL (4,2),
    "unit" VARCHAR(20)
)

INSERT INTO "groceries"
	("name", "quantity", "unit")
VALUES
	('Milk', 1, 'gallon'),
	('Bread', 1, 'loaf'),
	('Apples', 2, 'pounds'),
	('Sliced Almonds', 2.5, 'cups'),
	('Bananas', 1, 'bunch');

