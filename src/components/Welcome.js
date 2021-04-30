import { login, logout } from '../services/firebase';

function Welcome(props) {
	return (
		<ul>
            {
                props.user ?
                <>
                    <li> Welcome, {props.user.displayName}! You are logged in with {props.user.email}</li>
                    <li><img src={props.user.photoURL} alt={props.user.displayName} /></li>
                    <li className="auth-link" onClick={logout}>Logout</li>
                </>
                :
                <li className="auth-link" onClick={login}>Welcome, please login to continue!</li>
            }
        </ul>
	);
}
export default Welcome;
