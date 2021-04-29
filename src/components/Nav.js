import StudentList from "./StudentList";

function Nav({ students }) {
	return (
		<nav>
			<StudentList students={students} />
		</nav>
	);
}

export default Nav;
