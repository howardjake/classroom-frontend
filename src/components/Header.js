import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";

const Header = ({ user }) => (
	<header>
		<h1 className="Header_Message">Gradebook App</h1>

		<ul className="navigation">
			{user ? (
				<>
					<li className="Welcome_User">Welcome, {user.displayName}!</li>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/assignments">Assignments</Link>
					</li>

					<li className="auth-link" onClick={logout}>
						<Link to="/">Logout</Link>
					</li>
				</>
			) : (
				<>
				<li className="auth-link" onClick={login}>
					 Welcome! Please click here to login.
				</li>
				</>

			)}
		</ul>
	</header>
);

export default Header;
