import {Suspense} from 'react';
import {getAll} from './db/get.js';
import SearchablePokemonList from './SearchablePokemonList.jsx';
import Header from "./Header.jsx";
import SearchBox from "./SearchBox";

export default async function ServerRoot({ search }) {
	return (
		<div>
			<Header />
			<SearchBox search={search} />
			<Suspense fallback={<h2>Loading...</h2>}>
				<Pokemons search={search} />
			</Suspense>
		</div>
	);
}

async function Pokemons({ search }) {
	const pokemons = await getAll();
	return <SearchablePokemonList search={search} pokemons={pokemons} />;
}

// function Pokemons({ search }) {
// 	const [pokemons, setPokemons] = React.useState([]);
// 	React.useEffect(() => {
// 		getAll().then(setPokemons)
// 	}, []);
//
// 	return <SearchablePokemonList search={search} pokemons={pokemons} />;
// }
