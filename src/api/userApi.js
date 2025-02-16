import axios from "axios";
import {toast} from "react-toastify";

const token = localStorage.getItem("accessToken");

export async function getAllUsers(){
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        } );
        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getUserById(userId) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function updateUserById(userId, userData) {
    try {
        const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/user/${userId}`, userData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function deleteUserById(userId){
    try {
        const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getUserPokemonList(userId) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/pokemonList/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}

export async function getTopUsers(){
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/topUsers`)

        return response.data;
    } catch (err) {
        toast.error(err.response?.data?.message || "Request error", {
            position: "top-right",
            autoClose: 3000,
        });
    }
}
