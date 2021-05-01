import { login, logout } from "../services/firebase";
import { Link } from "react-router-dom";

const Header = ({ user }) => (
	<header>
		<h1 className="Header_Message">Gradebook App</h1>

		<ul className="navigation">
			<li>
				<Link to="/">Home</Link>
			</li>
			{user ? (
				<>
					<li className="Welcome_User">Welcome, {user.displayName}!</li>

					<li>
						<Link to="/assignments">Current Assignments</Link>
					</li>

					<li className="auth-link" onClick={logout}>
						Logout
					</li>
				</>
			) : (
				<li className="auth-link" onClick={login}>
					Login
				</li>
			)}
		</ul>
	</header>
);

export default Header;
