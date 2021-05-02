//import { useState } from "react";


function Dashboard({dashboardState, students}) {

	
return (
	<>

		<div className="card-container-one"> 
		<div className="course-card">
			<h3>Course info</h3>
			<br>
			<p className="card-body">{dashboardState.name}</p>
			<p className="card-body">Start Date: {dashboardState.start_date}</p>
			<p className="card-body">End Date: {dashboardState.end_date}</p>
			</br>
		</div>

		<div className="course-card">
			<h3>Course Schedule</h3>
			<p className="card-body">{dashboardState.schedule.join(', ')}</p>
		</div>

		<div className="student-num">
			<h3>Number of Students </h3>
			<p className="card-body">{dashboardState.number_of_students}</p>
		</div>


		<div className="card-container-two"> 
	
		<div className="grade-avg">
			<h3>Class Average </h3>
			<p className="card-body">{dashboardState.class_average}</p>
		</div>



		<div className="upcoming">
			<h3>Upcoming Assignments</h3>
			<p className="card-body">{dashboardState.assignments.join(', ')}</p>
		</div>



		</div>
		</div>
	</>
	
)};


export default Dashboard;
