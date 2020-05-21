import { User } from '../user';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

export function reducer(state: UserState, action) {
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