import { useState } from "react";
import GradeForm from "../components/GradeForm";
function StudentData({ student, assignments, handleUpdate }) {
	const [editFormVisible, setEditFormVisible] = useState(false);

	function toggleForm() {
		setEditFormVisible(!editFormVisible);
	}

	return (
		<div>
			<h2>{student?.name}</h2>
			<p>{student?.email}</p>
			<table>
				<tr>
					<th>Assignemnt</th>
					<th>Due Date</th>
					<th>Resubmit</th>
					<th>Date Submitted</th>
					<th>Grade</th>
				</tr>
				{assignments.map((assignment) => (
					<tr>
						<td>{assignment.name}</td>
						<td>{assignment.due_date}</td>
						<td>{assignment.date_submitted}</td>
						<td>{assignment.resubmit}</td>
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
				<tr>
					<td>Average</td>
					<td></td>
					<td></td>
					<td></td>
					<td>Number</td>
				</tr>
			</table>
		</div>
	);
}
export default StudentData;
