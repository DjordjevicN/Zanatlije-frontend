const globalState = {
    tasks: [],
    users: [],
    homePageTasks: [],
    homePageUsersPreview: [],
    userPreview: {},
    loading: false,
    notification: 'Notification testing'
}
const globalReducer = (state = globalState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case "SET_HOMEPAGE_TASKS":
            newState.homePageTasks = action.payload;
            break;
        case "SET_SEARCH_TASKS":
            newState.tasks = action.payload;
            break;
        case "SET_INIT_USERS":
            newState.users = action.payload;
            break;
        case "SET_SEARCH_USERS":
            newState.users = action.payload;
            break;
        case "SET_USER_PREVIEW":
            newState.userPreview = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default globalReducer