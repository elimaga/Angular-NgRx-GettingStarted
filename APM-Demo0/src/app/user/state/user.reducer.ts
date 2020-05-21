import { User } from '../user';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_USER_NAME_MASK':
      return {
        ...state,
        maskUserName: action.payload
      }

    default:
      return state;
  }
}