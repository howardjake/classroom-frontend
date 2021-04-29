import { useParams } from "react-router-dom";
import StudentData from "../components/StudentData";

function Student({ students, assignments }) {
	let { id } = useParams();

	const currentStudent = students.filter((student) => student.id == id)[0];
	const studentAssignments = assignments.filter(
		(assignment) => assignment.student_id == id
	);
	console.log(studentAssignments);

	return (
		<StudentData student={currentStudent} assignments={studentAssignments} />
	);
}

export default Student;
