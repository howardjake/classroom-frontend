/*
This will be reinstated afterwards to edit and upate the assignment_masters 
import { useState } from "react";

function MasterForm({ name, description, id, handleMaster, toggleForm }) {
	const [formState, setFormState] = useState({
		id: id,
		name: name,
        description: description,
	});

	function handleChange(event) {
		setFormState((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();

		handleMaster(formState);
		toggleForm();
	}
	return (
		<form onSubmit={handleSubmit}>
			
            <input
				onChange={handleChange}
				name="name"
				type="string"
				value={formState.name}
				id="name"
			/>
            <input
				onChange={handleChange}
				description="description"
				type="string"
				value={formState.description}
				id="description"
			/>
            
			<input type="submit" value="update" />
		</form>
	);
}

export default MasterForm;

*/