//import { useState } from "react";


function Dashboard({dashboardState, students}) {

	
return (
	<>

		<div className="card-container-one"> 
		<div className="course-card">
			<p>Course info</p>
			<p className="card-body">{dashboardState.name}</p>
			<p className="card-body">Start Date: {dashboardState.start_date}</p>
			<p className="card-body">End Date: {dashboardState.end_date}</p>
			<p className="card-body">Schedule: {dashboardState.schedule}</p>
		</div>

		<div className="student-num">
			<p>Number of Students </p>
			<p className="card-body">{dashboardState.number_of_students}</p>
		</div>


		<div className="card-container-two"> 
	
		<div className="grade-avg">
			<p>Class Average </p>
			<p className="card-body">{dashboardState.class_average}</p>
		</div>



		<div className="upcoming">
			<p>Upcoming Assignments</p>
			<p className="card-body">{dashboardState.assignments.join(', ')}</p>
		</div>



		</div>
		</div>
	</>
	
)};


export default Dashboard;
