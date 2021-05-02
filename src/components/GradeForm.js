import { useState } from "react";

function GradeForm({
	grade,
	id,
	handleUpdate,
	toggleForm,
	resubmit,
	dateSubmitted,
}) {
	const [formState, setFormState] = useState({
		id: id,
		resubmit: resubmit,
		date_submitted: dateSubmitted,
		grade: grade,
	});

	function handleChange(event) {
		setFormState((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();

		handleUpdate(formState);
		toggleForm();
	}

	return (
		<form onSubmit={handleSubmit}>
			<label for="date_submitted">Date Reviewed: </label>
			<input
				onChange={handleChange}
				name="date_submitted"
				type="date"
				value={formState.date_submitted}
				id="date_submitted"
			/>
			<label for="resubmit">Resubmit: </label>
			<input
				onChange={handleChange}
				name="resubmit"
				type="checkbox"
				value="true"
				id="resubmit"
			/>
			<label for="grade">Grade: </label>
			<input
				onChange={handleChange}
				name="grade"
				type="number"
				value={formState.grade}
				id="grade"
			/>

			<input type="submit" value="update" />
		</form>
	);
}

export default GradeForm;
