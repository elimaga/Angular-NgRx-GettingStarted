import { User } from '../user';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
}

export function reducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      }

    default:
      return state;
  }
}