export interface UserState {
    maskUserName: boolean;
}

export function reducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_USER_NAME_MASK':
            return {
                ...state,
                maskUserName: action.payload
            }
        
        default:
            return state;
    }
}