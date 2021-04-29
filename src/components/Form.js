//Form to add assignment data


import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      name:'',
      description:'',
    });

  useEffect(() => {
    if(props.editFormVisible) {
      const {name, description, id} = props.notice;
      setFormState({
        name,
        description,
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
           name="description"
           placeholder="Assignment Description"
           type="text"
           value={formState.description}
           id="grade"
        />
       <input type="submit" value={props.editFormVisible ? 'Update' : 'Add'} />
      </form>
    );
  }

export default Form;