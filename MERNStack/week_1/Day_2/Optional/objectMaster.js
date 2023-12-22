const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const pkmnIds = pokemon.filter( divisibleBy3 => (divisibleBy3.id %3==0) )
// console.log(pkmnIds);

const pkmType = pokemon.filter(type => type.types.includes("fire"))
// console.log(pkmType);

const pkmMoreType= pokemon.filter(type=> type.types.length>1);
// console.log(pkmMoreType);

const pkmName = pokemon.map(element=>element.name);
// console.log(pkmName);

const pkmNameId99 = pokemon.filter(id=>id.id>99).map(element=>element.name)
// console.log(pkmNameId99);

const pkmNamePoison = pokemon.filter(type=>type.types=='poison').map(element=>element.name);
// console.log(pkmNamePoison);

const pkmNameFlying = pokemon.filter(type=>type.types[1]=='flying').map(element=>element.types[0]);
// console.log(pkmNameFlying);


const pkmNameNormal = pokemon.filter(type=>type.types.includes('normal'))
console.log(pkmNameNormal.length);
