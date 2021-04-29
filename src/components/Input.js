//Add Inputs for form for individual student assignments

function Input({ 
  name, 
  description, 
  type, 
  value, 
  placeholder, 
  handleChange }) {
    return (
      <>
        <label htmlFor={name}>{description}</label>
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