import {getUserPokemonList} from "../api/userApi.js";
import {getPokemonById} from "../api/pokemonApi.js";

export async function getPokemonListById(userId) {
    try {
        const userPokemonIdList = await getUserPokemonList(userId);

        const pokemonList = await Promise.all(userPokemonIdList.map(async (el) => {
            const pokemon = await getPokemonById(el.pokemonId);

            return pokemon
        }));

        return pokemonList;
    } catch (err){
        console.error(err)
    }
}
