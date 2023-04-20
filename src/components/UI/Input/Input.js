import './Input.scss';

const Input = (props) => {
  return (
    <label>
        <div className="email__title">{props.title}</div>
            <input className='email__input' type={props.type} placeholder={props.placeholder}
            />
    </label>
  )
}

export default Input