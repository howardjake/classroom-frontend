import { useParams } from "react-router-dom";
import StudentData from "../components/StudentData";

function Student({ students, assignments, handleUpdate }) {
	let { id } = useParams();

	const currentStudent = students.filter((student) => student.id == id)[0];
	const studentAssignments = assignments.filter(
		(assignment) => assignment.student_id == id
	);

	return (
		<StudentData
			student={currentStudent}
			assignments={studentAssignments}
			handleUpdate={handleUpdate}
		/>
	);
}

export default Student;
