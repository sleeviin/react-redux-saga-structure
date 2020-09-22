import AuthState from './AuthState';
import UsersState from './UsersState';

export default interface ApplicationState {
	auth: AuthState;
	users: UsersState;
}
