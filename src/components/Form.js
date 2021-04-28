//Form to add assignment data


import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      name:'',
      grade:'',
      due_date:''
    });

  useEffect(() => {
    if(props.editFormVisible) {
      const {name, grade, due_date, id} = props.notice;
      setFormState({
        name,
        grade,
        due_date,
        id
      });
    }
  }, [props.editFormVisible, props.notice]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.editFormVisible) {
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
         />
         <Input
           handleChange={handleChange}
           name="grade"
           placeholder="Assignment Grade"
           type="text"
           value={formState.grade}
           id="grade"
        />
        <Input
          handleChange={handleChange}
          name="due_date"
          placeholder="Due Date"
          type="text"
          value={formState.due_date}
          id="due_date"
       />
       <input type="submit" value={props.editFormVisible ? 'Update' : 'Add'} />
      </form>
    );
  }

export default Form;