import { useState } from "react";
import Table from "react-bootstrap/Table";
import GradeForm from "../components/GradeForm";
function StudentData({ student, assignments, handleUpdate }) {
	const [editFormVisible, setEditFormVisible] = useState(false);
	const grades = assignments.map((assignment) => assignment.grade);
	const average = grades.reduce((sum, grade) => sum + grade) / grades.length;
	function gradeLetter(average) {
		if (average < 60) {
			return "F";
		} else if (average < 70) {
			return "D";
		} else if (average < 80) {
			return "C";
		} else if (average < 90) {
			return "B";
		} else if (average < 100) {
			return "A";
		}
	}
	function toggleForm() {
		setEditFormVisible(!editFormVisible);
	}

	return (
		<div>
			<h2>{student?.name} </h2>
			<span>{gradeLetter(average)}</span>
			<p>
				<em>{student?.email}</em>
			</p>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Assignemnt</th>
						<th>Due Date</th>
						<th>Resubmit</th>
						<th>Date Submitted</th>
						<th>Grade</th>
					</tr>
				</thead>
				<tbody>
					{assignments.map((assignment, idx) => (
						<tr>
							<td id={idx}>{assignment.name}</td>
							<td id={idx}>{assignment.due_date}</td>
							<td id={idx}>{assignment.resubmit ? "✔" : "No"}</td>
							<td id={idx}>{assignment.date_submitted}</td>
							{editFormVisible ? (
								<td>
									<GradeForm
										editFormVisible={editFormVisible}
										toggleForm={toggleForm}
										handleUpdate={handleUpdate}
										grade={assignment.grade}
										id={assignment.id}
									/>
								</td>
							) : (
								<td>
									{assignment.grade}
									<button onClick={toggleForm}>Edit</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Average</td>
						<td></td>
						<td></td>
						<td></td>
						<td>{average}</td>
					</tr>
				</tfoot>
			</Table>
		</div>
	);
}
export default StudentData;
