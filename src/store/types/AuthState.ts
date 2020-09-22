import Auth from '../../types/Auth';

export enum AuthActionTypes {
	FETCH_REQUEST = '@@auth/FETCH_REQUEST',
	FETCH_SUCCESS = '@@auth/FETCH_SUCCESS',
	FETCH_ERROR = '@@auth/FETCH_ERROR',
	SELECT_TEAM = '@@auth/SELECT_TEAM',
	SELECTED = '@@auth/SELECTED',
	CLEAR_SELECTED = '@@auth/CLEAR_SELECTED',
}

export default interface AuthState {
	readonly loading: boolean;
	readonly data: Auth;
	readonly errors?: string;
}
