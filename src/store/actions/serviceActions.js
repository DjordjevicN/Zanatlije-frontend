import Axios from 'axios'
// let websiteUrl = 'http://localhost:3000'
// let hosting = "http://localhost:3001"
let hosting = "http://api.zanatlije.rs/"


// create service
export const createService = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        // creates new Service
        await Axios.post(`${hosting}/createService`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// get users services
export const getUsersServices = (userId) => {

    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getUsersServices`, { userId })
        dispatch({
            type: 'SET_USER_SERVICES',
            payload: response.data.results
        })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// update/edit service
export const editService = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/editService`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// delete service
// / DELETE service  PS. Axios.delete() don't pass id for some reason
export const deleteService = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/deleteService`, { value })
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// get filtered services
export const getServiceById = (value) => {

    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        let response = await Axios.post(`${hosting}/getServiceById`, { value })
        if (response.data.success) {
            dispatch({
                type: 'SET_USER_SERVICES',
                payload: response.data.results
            })
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

