import { useState } from "react";

function Form({ grade, id, handleUpdate, toggleForm }) {
	const [formState, setFormState] = useState({
		id: id,
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

export default Form;
