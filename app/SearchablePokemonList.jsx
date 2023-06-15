import SearchBox from "./SearchBox";

export default function SearchablePokemonList({ pokemons, search }) {
	const filterPokemons = filter(pokemons, search ?? '');
	return (
			<ul>
				{filterPokemons.map((pokemon) => (
					<div key={pokemon.id}>
						<img className="w-20" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.title} />
						<li>{pokemon.name}</li>
					</div>
				))}
			</ul>
	);
}

function filter(pokemons, search) {
	const keywords = search.toLowerCase()
	if (keywords.length === 0) {
		return pokemons;
	}
	return pokemons.filter((pokemon) => {
		return pokemon.name.startsWith(search);
	});
}
