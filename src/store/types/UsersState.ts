import User from '../../types/User';

export enum UsersActionTypes {
	FETCH_REQUEST = '@@users/FETCH_REQUEST',
	FETCH_SUCCESS = '@@users/FETCH_SUCCESS',
	FETCH_ERROR = '@@users/FETCH_ERROR',
}

export default interface AuthState {
	readonly loading: boolean;
	readonly data: User[];
	readonly errors?: string;
}
