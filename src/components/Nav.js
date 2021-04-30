import StudentList from "./StudentList";

function Nav({ students }) {
	return (
		<nav>
			<StudentList students={students} />
			<img src="https://images.unsplash.com/photo-1549980384-d61217e50c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80</img>" className="img"></img>
		</nav>
	);
}

export default Nav;


