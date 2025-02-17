import {useEffect, useState} from "react";
import {Container} from "./styled.js";
import {TeamCard} from "../TeamCard/TeamCard.jsx";
import {useUser} from "../../../contexts/UserContext.jsx";
import {getPokemonListById} from "../../../helpers/getPokemonListById.js";


export const BattleTeamList = () => {
    const [pokemons, setPokemons] = useState(null);
    const [selectedPokemons, setSelectedPokemons] = useState([]);
    const {user} = useUser();

    useEffect( () => {
        async function fetchPokemonData(){
            try {
                const pokemonList = await getPokemonListById(user._id);

                console.log(pokemonList)
                setPokemons(pokemonList);
            } catch (e) {
                console.error(e)
            }
        }
        fetchPokemonData()

    }, []);

    const handleCardClick = (pokemon) => {
        if (selectedPokemons.includes(pokemon)) {
            setSelectedPokemons(selectedPokemons.filter((item) => item !== pokemon));
        } else if (selectedPokemons.length < 3) {
            setSelectedPokemons([...selectedPokemons, pokemon]);
        }
    };

    return pokemons && (
        <Container>
            {pokemons.map((pokemon) => (
                <TeamCard
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.gifs.front_default}
                    isSelected={selectedPokemons.includes(pokemon)}
                    onClick={() => handleCardClick(pokemon)}
                />
            ))}
        </Container>
    );
}
