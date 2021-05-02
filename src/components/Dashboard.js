function Dashboard({ dashboardState, students }) {
	let schedule  = dashboardState.schedule.replace('[',"").replace(']',"").split(',')

	return (
		<>
		{dashboardState.name === "Computer Science" ?
		<>
			<div className="card-container-one">
				<div className="course-card">
					<h3> {dashboardState.name} </h3>
					<p className="card-body">
						Start Date: {dashboardState.start_date} <br />
						End Date: {dashboardState.end_date}
					</p>
				</div>

				<div className="course-card">
					<h3>Course Schedule</h3>
					<p className="card-body">

						<ul>

						{schedule.map(string => <li>{string}</li>)}
						</ul>
					</p>
				</div>

				<div className="course-card">
					<h3>Number of Students </h3>
					<p className="card-body">{dashboardState.number_of_students}</p>
				</div>

				<div className="card-container-two">
					<div className="course-card">
						<h3>Class Average </h3>
						<p className="card-body">{dashboardState.class_average}</p>
					</div>

					<div className="course-card">
						<h3>Upcoming Assignments</h3>
						<p className="card-body">{dashboardState.assignments.join(", ")}</p>
					</div>
				</div>
			</div>
	</> : ""}
		</>
	);
}

export default Dashboard;
