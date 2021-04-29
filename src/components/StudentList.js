import { Link } from "react-router-dom";

function StudentList({ students }) {
	return (
		<>
		{students.map((student, idx) => {
				return (
					<Link id={idx} to={`/student/${student.id}`}>
						<p>{student.name}</p>
					</Link>
				);
			})}	
		</>
	);
}
export default StudentList;

