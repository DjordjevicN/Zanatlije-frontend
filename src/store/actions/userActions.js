import Axios from 'axios'
import * as notifications from '../../globalConfigurations/Notifications'

// let websiteUrl = 'http://localhost:3000'
// let hosting = "http://localhost:3001"
let hosting = "http://api.zanatlije.rs/"
export const createUser = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        // creates new user
        const response = await Axios.post(`${hosting}/createUser`, { value })
        if (response.data.success) {
            // logs in user after creating it
            const login = await Axios.post(`${hosting}/loginUser`, { value });
            if (login.data.success) {
                dispatch({
                    type: 'LOGIN_USER',
                    payload: login.data.results[0]
                })
                dispatch({
                    type: 'SET_LOCAL_STATE_TOKEN',
                    payload: login.data.token
                })
            }
            notifications.success(response.data.msg)
        } else {
            notifications.fail(response.data.msg)
        }

        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
export const loginUser = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        const response = await Axios.post(`${hosting}/loginUser`, { value });
        if (response.data.success) {
            dispatch({
                type: 'LOGIN_USER',
                payload: response.data.results[0]
            })
            dispatch({
                type: 'SET_LOCAL_STATE_TOKEN',
                payload: response.data.token
            })
            notifications.success(response.data.msg)
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// UPDATE USER PROFILE  
export const updateUser = (value) => {

    let userToken = localStorage.getItem('userToken');
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        await Axios.post(`${hosting}/updateUser`, { value }, {
            headers: {
                authorization: userToken
            }
        });
        let response = await Axios.post(`${hosting}/getUserById`, { value })
        if (response.data.results.length <= 0) {
            dispatch({
                type: "LOADING_FALSE"
            })
        } else {
            dispatch({
                type: 'UPDATE_USER',
                payload: response.data.results[0]
            })
            dispatch({
                type: "LOADING_FALSE"
            })
            notifications.success(response.data.msg)
        }
    }
}
// LOGOUT

export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOGOUT_USER"
        })
        dispatch({
            type: "SET_LOCAL_STATE_LOGOUT"
        })
    }
}

export const getMyData = (value) => {
    let userToken = localStorage.getItem('userToken');
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        // get authUser
        const authUserResponse = await Axios.get(`${hosting}/getMyData`, {
            headers: {
                authorization: userToken
            }
        });
        if (authUserResponse.data.success) {
            dispatch({
                type: 'LOGIN_USER',
                payload: authUserResponse.data.results[0]
            })
            dispatch({
                type: "LOADING_FALSE"
            })
        }
        // Get userTasks
        const userTaskResponse = await Axios.get(`${hosting}/getUserTasks`, {
            headers: {
                authorization: userToken
            }
        });
        if (userTaskResponse.data.success) {
            dispatch({
                type: 'SET_USER_TASKS',
                payload: userTaskResponse.data.results
            })
        }
        // Get userTasks
        const userServiceResponse = await Axios.get(`${hosting}/getUserServices`, {
            headers: {
                authorization: userToken
            }
        });
        if (userServiceResponse.data.success) {
            dispatch({
                type: 'SET_USER_SERVICES',
                payload: userServiceResponse.data.results
            })
        }
    }
}


export const getUsersTaskById = () => {
    let userToken = localStorage.getItem('userToken');
    return async (dispatch) => {
        const userTaskResponse = await Axios.get(`${hosting}/getUserTasks`, {
            headers: {
                authorization: userToken
            }
        });
        if (userTaskResponse.data.success) {
            dispatch({
                type: 'SET_USER_TASKS',
                payload: userTaskResponse.data.results
            })
        }
    }
}

// SEND MESSAGE
export const sendMessage = (value) => {
    let proposalId = value.messageProposalId
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        const response = await Axios.post(`${hosting}/sendMessage`, { value })
        if (response.data.success) {
            const messages = await Axios.post(`${hosting}/getProposalsMessages`, { proposalId });
            dispatch({
                type: 'SET_NEW_MESSAGE',
                payload: messages.data.results
            })
            notifications.success(response.data.msg)
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}

// GET MESSAGES BY PROPOSAL ID
export const getProposalsMessages = (value) => {
    let proposalId = value;
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        const response = await Axios.post(`${hosting}/getProposalsMessages`, { proposalId });
        if (response.data.success) {
            dispatch({
                type: 'SET_NEW_MESSAGE',
                payload: response.data.results
            })
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}
// GET MESSAGES BY PROPOSAL ID
export const getUserProposalsById = (value) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_TRUE"
        })
        const response = await Axios.post(`${hosting}/getUserProposalsById`, { value });
        if (response.data.success) {
            dispatch({
                type: 'SET_INBOX',
                payload: response.data.results
            })
        }
        dispatch({
            type: 'LOADING_FALSE'
        })
    }
}