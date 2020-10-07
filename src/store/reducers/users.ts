import { Reducer } from 'redux';
import { UsersActionTypes, UsersState } from '../../types/User';

export const initialState: UsersState = {
	data: [],
	errors: undefined,
	loading: false,
};

const reducer: Reducer<UsersState> = (state = initialState, action) => {
	switch (action.type) {
		case UsersActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case UsersActionTypes.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.payload };
		}
		case UsersActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, errors: action.payload };
		}
		case UsersActionTypes.SELECT_USER: {
			return { ...state, selected: action.payload };
		}
		case UsersActionTypes.CLEAR_SELECTED: {
			return { ...state, selected: undefined };
		}
		default: {
			return state;
		}
	}
};

export default reducer;
