const { v4: uuidv4 } = require('uuid');

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, {
                title: action.task.title,
                details: action.task.details,
                id: uuidv4()
            }]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id)
        default:
            return state
    }
}