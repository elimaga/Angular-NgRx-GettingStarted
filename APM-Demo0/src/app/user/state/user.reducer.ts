import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState, 
  state => state.maskUserName
)

export const getCurrentUser = createSelector(
  getUserFeatureState, 
  state => state.currentUser
)

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