import { useState } from "react";


function Dashboard({ students, class_average, name, assignments_list, start_date, end_date, number_of_students }) {

	
return (
	<>
		<div className="card-container-one"> 

		<div className="course-card">
			<p>Course info</p>
			<p>{students.name}</p>
			<p>Start Date: {students.start_date}</p>
			<p>End Date: {students.end_date}</p>
		</div>

		<div className="student-num">
			<p>Number of Students </p>
			<p>{students.number_of_students}</p>
		</div>


		<div className="card-container-two"> 
	
		<div className="grade-avg">
			<p>Class Average </p>
			<p>{students.class_average}</p>
		</div>

		<div className="upcoming">
			<p>Upcoming Assignments</p>
			<p>{students.assignments_list}</p>
		</div>

		</div>
		</div>
	</>
	
)};


export default Dashboard;
