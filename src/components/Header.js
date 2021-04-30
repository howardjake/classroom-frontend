
const Header = (props) => (
    <header>
        <h1>Gradebook App</h1>

        
         <ul className="login-prompt">
            {
                props.user ?
                <>
                    <li> Welcome, {props.user.displayName}! You are logged in with {props.user.email}</li>
                    <li><img src={props.user.photoURL} alt={props.user.displayName} /></li>
                    <li className="auth-link" onClick={logout}>Logout</li>
                </>
                :
                <li className="auth-link" onClick={login}>Welcome! Please login to continue.</li>
            }

        </ul>

        <ul className="navigation">
            <li><a href="./">Home</a></li>
           <li><a href="#">Add Assignment</a></li> 
           <li><a href="#">Login</a></li> 
           <li><a href="#">Logout</a></li> 
        </ul>



    </header>
); 

export default Header;