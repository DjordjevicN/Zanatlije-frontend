import Axios from 'axios'
// let websiteUrl = 'http://localhost:3000'
// let hosting = "http://localhost:3001"
let hosting = "http://api.zanatlije.rs/"

// CREATE TASK
export const createTask = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/createTask`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// / DELETE TASK  PS. Axios.delete() don't pass id for some reason
export const deleteTask = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/deleteTask`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// UPDATE/EDIT TASK
export const updateTask = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/updateTask`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// CREATE PROPOSAL
export const createProposal = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/createProposal`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// GET TASK PROPOSALS
export const getTaskProposals = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getTaskProposals`, { value })
        if (response.data.success) {
            dispatch({
                type: 'SET_TASK_PROPOSALS',
                payload: response.data.results
            })
        }

        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// GET TASK BY ID
export const getTaskById = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getTaskById`, { value })
        if (response.data.success) {
            dispatch({
                type: 'SET_SEARCH_TASKS',
                payload: response.data.results
            })
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}