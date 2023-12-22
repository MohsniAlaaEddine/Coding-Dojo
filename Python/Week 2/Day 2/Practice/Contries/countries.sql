SELECT countries.name,languages.language,languages.percentage FROM countries
JOIN world.languages 
ON countries.id=languages.country_id
WHERE languages.language='Slovene'
ORDER BY languages.percentage DESC;

SELECT countries.name ,count(cities.name) as number_cities FROM countries
JOIN cities
ON countries.id= cities.country_id 
GROUP BY countries.name
ORDER BY number_cities DESC;

SELECT cities.name,cities.population,cities.country_id FROM cities WHERE cities.population>500000 
AND cities.country_id=(SELECT id FROM countries WHERE countries.name='Mexico')
ORDER BY cities.population DESC;

SELECT countries.name ,languages.language,languages.percentage FROM countries
JOIN languages
ON countries.id=languages.country_id
WHERE languages.percentage>89
ORDER BY languages.percentage DESC;

SELECT countries.name,countries.surface_area,countries.population FROM  countries
WHERE surface_area<501 AND population >100000;

SELECT countries.name FROM countries WHERE government_form='Constitutional Monarchy'
AND capital>200 AND life_expectancy>75;

SELECT countries.name as country_name,cities.name as city_name,cities.population,cities.district FROM countries
JOIN cities
ON countries.id=cities.country_id
WHERE countries.name ='Argentina' AND cities.district='Buenos Aires' AND cities.population>500000;

SELECT count(countries.name) as number_countries, countries.region FROM countries
GROUP BY countries.region
ORDER BY number_countries DESC;















