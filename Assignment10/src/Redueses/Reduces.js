export const taskReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TASK":
            console.log(state.allTasks)
            return {
                ...state,
                allTasks: state.allTasks && [action.payload, ...state.allTasks]
            }
        case "DELETE_TASK":
            const fileredTasks = state.allTasks.filter(task=>task.id !== action.payload);
            return {
                ...state,
                allTasks: fileredTasks,
            }

        case "CLEAR_ALL_DATA":
            return {
                allTasks: action.payload
            }
    
        default:
            return state;
    }
}