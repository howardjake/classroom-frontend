import { Link } from "react-router-dom";

function StudentList({ students }) {
	return (
		<>
			<h1> Students </h1>
			<ul>
				{students.map((student, idx) => {
					return (
						<Link id={idx} to={`/student/${student.id}`}>
							<p>{student.name}</p>
						</Link>
					);
				})}
			</ul>
		</>
	);
}
export default StudentList;
