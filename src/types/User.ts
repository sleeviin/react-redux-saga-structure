export default interface User {
	name: string;
	email: string;
	role: string;
	phone: string;
	address: string;
	created: Date;
}

export enum UsersActionTypes {
	FETCH_REQUEST = '@@users/FETCH_REQUEST',
	FETCH_SUCCESS = '@@users/FETCH_SUCCESS',
	FETCH_ERROR = '@@users/FETCH_ERROR',
	SELECT_USER = '@@users/SELECT_USER',
	CLEAR_SELECTED = '@@users/CLEAR_SELECTED',
}

export interface UsersState {
	readonly loading: boolean;
	readonly data: User[];
	readonly selected?: User;
	readonly errors?: string;
}
