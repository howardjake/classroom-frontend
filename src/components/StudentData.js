function StudentData({ student, assignments }) {
	return (
		<div>
			<h2>{student.name}</h2>
			<p>{student.email}</p>
			<table>
				<tr>
					<th>Assignemnt</th>
					<th>Grade</th>
					<th>Due Date</th>
					<th>Date Submitted</th>
					<th>Resubmit</th>
				</tr>
				{assignments.map((assignment) => (
					<tr>
						<td>{assignment.name}</td>
						<td>{assignment.grade}</td>
						<td>{assignment.due_date}</td>
						<td>{assignment.date_submitted}</td>
						<td>{assignment.resubmit}</td>
					</tr>
				))}
			</table>
		</div>
	);
}
export default StudentData;
