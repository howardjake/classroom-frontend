//Inputs for form for individual student assignments

function Input({ 
  name, 
  title, 
  type, 
  value, 
  placeholder, 
  handleChange }) {
    return (
      <>
      
        <label htmlFor={name}>{title}</label>
       
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    );
}

export default Input;