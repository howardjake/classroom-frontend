
import Form from "../components/Form"

function AssignmentForm (props) {
    return (
        <div className="FormEntry">
            <Form handleAdd={props.handleAdd}/>
        </div>
    )
}
 export default AssignmentForm;