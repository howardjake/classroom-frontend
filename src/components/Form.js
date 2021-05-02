import { useState,  } from "react";
import Input from "./Input.js";

function Form(props) {
	const [formState, setFormState] = useState({
		NewAssignmentMasters: {
			name: "",
			description: "",
			due_date: "",
			course_id: 1,
		},
	});
	//This will be reinstated later to edit the namerform
	// useEffect(() => {
	// 	if (props.editFormVisible) {
	// 		const { name, description } = props.notice;
	// 		setFormState({
	// 			name,
	// 			description,
	// 		});
	// 	}
	// }, [props.editFormVisible, props.notice]);

	function handleChange(event) {
		setFormState((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (props.editFormVisible) {
			props.handleUpdate(formState);
			props.toggleForm();
		} else {
			props.handleAdd(formState);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				handleChange={handleChange}
				name="name"
				placeholder="Assignment Name"
				type="text"
				value={formState.name}
				id="name"
				hidden="false"
			/>
			<Input
				handleChange={handleChange}
				name="description"
				placeholder="Assignment Description"
				type="text"
				value={formState.description}
				id="grade"
				hidden
			/>
			<Input
				handleChange={handleChange}
				name="due_date"
				type="date"
				value={formState.due_date}
				id="due_date"
				hidden
			/>
			<label htmlFor="course_id"></label>
			<input
				hidden
				id="course_id"
				name="course_id"
				type="number"
				value="5"
				onChange={handleChange}
			/>
			<input
				type="submit"
				value={props.editFormVisible ? "Update" : "Add New Assignment Here"}
			/>
		</form>
	);
}

export default Form;
