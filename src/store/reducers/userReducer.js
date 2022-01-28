
const userState = {
    authUser: {},
    userTasks: [],
    userServices: [],
    userMessages: [],
    userReviews: [],
    tasksProposals: [],
    inbox: [],
    loading: false,
    notification: 'Notification testing'
}
const userReducer = (state = userState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case 'LOADING_TRUE':
            newState.loading = true;
            break;
        case 'LOADING_FALSE':
            newState.loading = false;
            break;
        case 'LOGIN_USER':
            newState.authUser = action.payload;
            break;
        case "UPDATE_USER":
            newState.authUser = action.payload;
            break;
        case "SET_LOCAL_STATE_LOGOUT":
            localStorage.removeItem('userToken')
            break;
        case "SET_LOCAL_STATE_TOKEN":
            localStorage.setItem('userToken', action.payload)
            break;
        case "SET_USER_TASKS":
            newState.userTasks = action.payload;
            break;
        case "SET_USER_SERVICES":
            newState.userServices = action.payload;
            break;
        case "SET_TASK_PROPOSALS":
            newState.tasksProposals = action.payload;
            break;
        case "SET_NEW_MESSAGE":
            newState.userMessages = action.payload;
            break;
        case "SET_INBOX":
            newState.inbox = action.payload;
            break;
        case "LOGOUT_USER":
            newState.authUser = {};
            break;
        case "EMPTY_USER_TASKS":
            newState.userTasks = [];
            break;
        case "EMPTY_USER_SERVICES":
            newState.userServices = [];
            break;
        case "EMPTY_USER_MESSAGES":
            newState.userMessages = [];
            break;
        case "EMPTY_USER_REVIEWS":
            newState.userReviews = [];
            break;
        case "EMPTY_USER_PROPOSALS":
            newState.tasksProposals = [];
            break;
        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default userReducer