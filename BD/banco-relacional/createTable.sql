-- CREATE TABLE STATES
CREATE TABLE STATES(
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(45) NOT NULL,
	ACRONYM VARCHAR(2) NOT NULL,
	REGION ENUM('NORTE', 'NORDESTE', 'CENTRO-OESTE', 'SUDESTE', 'SUL') NOT NULL,
	POPULATION DECIMAL(5,2) NOT NULL,
	PRIMARY KEY (ID),
	UNIQUE KEY (NAME),
	UNIQUE KEY(ACRONYM)
);


-- INSERT INTO
INSERT INTO STATES
    (NAME, ACRONYM, REGION, POPULATION)
VALUES
    ('Bahia', 'BA', 'Nordeste', 15.34),
    ('Ceará', 'CE', 'Nordeste', 9.02),
    ('Distrito Federal', 'DF', 'Centro-Oeste', 3.04),
    ('Espírito Santo', 'ES', 'Sudeste', 4.02),
    ('Goiás', 'GO', 'Centro-Oeste', 6.78),
    ('Maranhao', 'MA', 'Nordeste', 7.00),
    ('Mato Grosso', 'MT', 'Centro-Oeste', 3.34),
    ('Mato Grosso do Sul', 'MS', 'Centro-Oeste', 2.71),
    ('Minas Gerais', 'MG', 'Sudeste', 21.12),
    ('Pará', 'PA', 'Norte', 8.36),
    ('Paraíba', 'PB', 'Nordeste', 4.03),
    ('Parana', 'PR', 'Sul', 11.22),
    ('Pernambuco', 'PE', 'Nordeste', 9.47),
    ('Piauí', 'PI', 'Nordeste', 3.22),
    ('Rio de Janeiro', 'RJ', 'Sudeste', 16.72),
    ('Rio Grande do Norte', 'RN', 'Nordeste', 3.51),
    ('Rio Grande do Sul', 'RS', 'Sul', 11.32),
    ('Rondônia', 'RO', 'Norte', 1.81),
    ('Roraima', 'RR', 'Norte', 0.52),
    ('Santa Catarina', 'SC', 'Sul', 7.01),
    ('São Paulo', 'SP', 'Sudeste', 45.10),
    ('Sergipe', 'SE', 'Nordeste', 2.29),
    ('Tocantins', 'TO', 'Norte', 1.55);

-- Exemplo de Insert 1
INSERT INTO STATES (NAME, ACRONYM, REGION, POPULATION)
    VALUES ('Acre', 'AC', 'Norte', 0.83);

-- Exemplo de Insert 2
INSERT INTO STATES 
    (NAME, ACRONYM, REGION, POPULATION)
VALUES
    ('Alagoas', 'AL', 'Nordeste', 3.38),
    ('Amapá', 'AP', 'Norte', 0.8),
    ('Amazonas', 'AM', 'Norte', 4.06);
   
INSERT INTO STATES(ID, NAME, ACRONYM, REGION, POPULATION)
	VALUES (1000,'NOVO', 'NV','SUL', 2.54);

INSERT INTO STATES(NAME, ACRONYM, REGION, POPULATION)
	VALUES ('NOVO1', 'NM','NORTE', 2.54);

SELECT * FROM STATES;
-- SELECT 
SELECT * FROM wm.STATES;

SELECT  ACRONYM, NAME AS 'NOME DO ESTADO' FROM STATES;

SELECT  ACRONYM, NAME AS 'NOME DO ESTADO' FROM STATES 
	WHERE ID=12;

SELECT ACRONYM, NAME FROM STATES 
	WHERE REGION = 'SUL';

SELECT  NAME, REGION, POPULATION FROM STATES 
	WHERE POPULATION >= 10 ORDER BY POPULATION DESC;

SELECT COUNT(NAME) FROM STATES;

-- UPDATE
UPDATE STATES AS st 
	SET st.NAME='MARANHÃO' 
	WHERE st.ACRONYM="MA";

UPDATE  STATES AS ST 
	SET 
		ST.NAME ="Paraná",
		ST.POPULATION=11.32
WHERE ACRONYM="PR";

SELECT COUNT(*) FROM STATES;

-- DELETE
DELETE FROM STATES WHERE ID=1000;

-- DELETE TABLE
DROP TABLE STATES ;

-- SELECT AGREGAÇÃO
SELECT 
	REGION AS 'REGIÃO',
	SUM(POPULATION) AS TOTAL
FROM STATES 
GROUP BY REGION 
ORDER BY TOTAL DESC;

-- CREATE TABLE CITIES

CREATE TABLE IF NOT EXISTS CITIES(
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(255) NOT NULL,
	STATE_ID INT UNSIGNED NOT NULL,
	AREA DECIMAL(10,2),
	PRIMARY KEY (ID),
	FOREIGN KEY (STATE_ID) REFERENCES STATES (ID)
);

-- INSERT CITIES
INSERT INTO CITIES (NAME, AREA, STATE_ID)
	VALUES('Campinas', 764, 21);

INSERT INTO CITIES(NAME, AREA, STATE_ID)
	VALUES ('NITERÓI', 122.4, 15);

INSERT INTO CITIES (NAME, AREA, STATE_ID)
	VALUES ('Caruaru', 956.5, 
		(SELECT ID 
		FROM STATES 
		WHERE ACRONYM='PE'));

INSERT INTO CITIES (NAME, AREA, STATE_ID)
	VALUES('Juazeiro do Norte', 656.7,
			(SELECT ID FROM STATES WHERE ACRONYM='CE'));
	
SELECT * FROM CITIES;

-- JOINs

SELECT S.NAME AS ESTADO, C.NAME, S.REGION AS CIDADE FROM STATES S, CITIES C
	WHERE S.ID = C.STATE_ID;

SELECT 
	C.NAME AS CIDADE,
	S.NAME AS ESTADO,
	S.REGION AS 'REGIÃO'
FROM STATES S 
	INNER JOIN CITIES C
	ON C.STATE_ID = S.ID;
	

-- CREATE TABLE MAYORS
CREATE TABLE IF NOT EXISTS MAYORS(
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	NAME VARCHAR(255) NOT NULL,
	CITY_ID INT UNSIGNED UNIQUE,
	FOREIGN KEY (CITY_ID) REFERENCES CITIES (ID)
);

INSERT INTO MAYORS(NAME, CITY_ID)
	VALUES
		('RODRIGO NEVES', 2),
		('RAQUEL LYRA', 3),
		('ZENALDO COUTINHO', NULL);

INSERT INTO MAYORS(NAME, CITY_ID)
	VALUES
		('RAFAEL GRECA', NULL);

INSERT INTO MAYORS(NAME, CITY_ID)
	VALUES
		('RAFAEL GRECA', 5);

SELECT * FROM CITIES C 
	INNER JOIN MAYORS M
	ON C.ID = M.CITY_ID;

SELECT * FROM CITIES C
	LEFT JOIN MAYORS M
	ON C.ID = M.CITY_ID;

SELECT * FROM MAYORS M
	RIGHT JOIN CITIES C
	ON C.ID = M.CITY_ID;	
	

SELECT * FROM CITIES C
	LEFT JOIN MAYORS M
	ON C.ID = M.CITY_ID
UNION 
SELECT * FROM MAYORS M
	RIGHT JOIN CITIES C
	ON C.ID = M.CITY_ID;

-- CREATE TABLE COMPANIES (EMPRESAS)

CREATE TABLE IF NOT EXISTS COMPANIES(
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(255) NOT NULL,
	CNPJ INT UNSIGNED UNIQUE,
	PRIMARY KEY (ID) 
);


-- CREATE TABLE INNER COMPANIES AND CITIES
-- COMPANY_UNITS (unidades da impresa)
CREATE TABLE IF NOT EXISTS COMPANY_UNITS(
	COMPANY_ID INT UNSIGNED NOT NULL,
	CITY_ID INT UNSIGNED NOT NULL,
	HEADQUARTER TINYINT(1) NOT NULL,
	FOREIGN KEY (COMPANY_ID) REFERENCES COMPANIES (ID),
	FOREIGN KEY (CITY_ID) REFERENCES CITIES (ID)
); 

ALTER  TABLE COMPANIES MODIFY CNPJ VARCHAR(14);

INSERT INTO `COMPANIES` (`NAME`,`CNPJ`) VALUES ("Vitae Aliquet Nec Inc.","32924490899"),("Est Nunc Laoreet PC","25713944999"),("Mi Enim Foundation","74335295599"),("Ullamcorper Viverra Limited","55696197699"),("Ac Foundation","51612657099"),("Aliquet Sem Ut Ltd","09896358299"),("Ipsum Non LLP","51326346399"),("In Inc.","97599543499"),("Tortor Corporation","59834809899"),("Per Ltd","93274333799");

INSERT  INTO COMPANY_UNITS(COMPANY_ID, CITY_ID, HEADQUARTER)
	VALUES
		(1,1,1),
		(3,2,0),
		(1,3,1),
		(2,4,0);
	
SELECT * FROM COMPANIES ;

SELECT CO.NAME AS EMPRESAS, C.NAME AS CIDADE
FROM COMPANIES CO, COMPANY_UNITS CM, CITIES C
WHERE 
	CO.ID = CM.COMPANY_ID 
	AND
	C.ID = CM.CITY_ID;



5e2d478b03b3db3fc57581cf579ebe9d31f2c458