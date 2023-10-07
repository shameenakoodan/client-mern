
const FormRow = ({type,name,labelText,defaulValue}) => {
  return (
    <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText || name}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            className="form-input"
            defaultValue={defaulValue || ''}
            required
          ></input>
        </div>
  )
}

export default FormRow