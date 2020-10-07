export default interface Auth {
	userId: string;
	name: string;
	profileImage: string;
}

export enum AuthActionTypes {
	SET_AUTH = '@@auth/SET_AUTH',
	CLEAR_AUTH = '@@auth/CLEAR_AUTH',
}
