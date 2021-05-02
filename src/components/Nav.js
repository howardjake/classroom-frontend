import StudentList from "./StudentList";

function Nav({ students }) {
	return (
		<nav className="StudentList">
				<StudentList students={students} />
		</nav>
	);
}

export default Nav;

