import Axios from 'axios'
// let hosting = "http://localhost:3001"
let hosting = "http://api.zanatlije.rs"


// get latest Tasks
export const getLatestTasks = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.get(`${hosting}/getLatestTasks`)
        dispatch({
            type: 'SET_HOMEPAGE_TASKS',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// get initial profiles for zanatlije page
export const getInitialProfiles = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.get(`${hosting}/getInitialProfiles`)
        dispatch({
            type: 'SET_INIT_USERS',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// GET SEARCH TASKS KEYWORDS
export const getSearchTasks = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getSearchTasks`, { value })
        dispatch({
            type: 'SET_SEARCH_TASKS',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// SEARCH USERS BASED ON SERVICES
export const getSearchUsers = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getSearchUsers`, { value })
        dispatch({
            type: 'SET_SEARCH_USERS',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// GET USER AND HIS SERVICES BY USER ID
export const getUserAndServices = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getUserAndServices`, { value })
        dispatch({
            type: 'SET_USER_PREVIEW',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}