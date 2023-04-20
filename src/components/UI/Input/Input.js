import './Input.scss';

const Input = (props) => {
  return (
    <label>
        <div className="form__title">{props.title}</div>
            <input className='form__input' type={props.type} placeholder={props.placeholder}
            />
    </label>
  )
}

export default Input