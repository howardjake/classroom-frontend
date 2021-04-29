import Form from "../components/Form"

function AssignmentForm (props) {
    return (
        <div>
            <Form handleAdd={props.handleAdd}/>
        </div>
    )
}
 export default AssignmentForm;