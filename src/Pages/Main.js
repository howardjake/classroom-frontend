import { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import Welcome from "../components/Welcome.js";



function Main({ assignments, handleDelete, handleUpdate }) {
	return (
		<main>
			<Welcome />
			
		</main>
	);
}

export default Main;


