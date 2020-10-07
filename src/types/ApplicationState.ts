import { UsersState } from './User';
import Auth from './Auth';
import { RouterState } from 'connected-react-router';

export default interface ApplicationState {
	users: UsersState;
	auth?: Auth;
	router: RouterState;
}
