//import { useState } from "react";


function Dashboard({dashboardState, students}) {

	
return (
	<>
		<div className="card-container-one"> 

		<div className="course-card">
			<p>Course info</p>
			<p>{dashboardState.name}</p>
			<p>Start Date: {dashboardState.start_date}</p>
			<p>End Date: {dashboardState.end_date}</p>
		</div>

		<div className="student-num">
			<p>Number of Students </p>
			<p>{dashboardState.number_of_students}</p>
		</div>


		<div className="card-container-two"> 
	
		<div className="grade-avg">
			<p>Class Average </p>
			<p>{dashboardState.class_average}</p>
		</div>

		<div className="upcoming">
			<p>Upcoming Assignments</p>
			<p>{dashboardState.assignments_list}</p>
		</div>

		</div>
		</div>
	</>
	
)};


export default Dashboard;
