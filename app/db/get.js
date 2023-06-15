import pokemons from '../db/data/pokemons.json';

export async function getAll() {
	return new Promise(resolve => {
		setTimeout(() => resolve(pokemons), 2000);
	})
}
