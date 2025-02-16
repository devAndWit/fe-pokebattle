import axios from "axios";
import {toast} from "react-toastify";


export async function getAllPokemon(){
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/pokemon/all`);
        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getAllPokemonByPage(page) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/pokemon/page/${page}`)

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getAllPokemonByPagePerPage(page, perPage) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/pokemon/page/${page}/${perPage}`)

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getPokemonById(pokemonId){
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/pokemon/byId/${pokemonId}`)

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

