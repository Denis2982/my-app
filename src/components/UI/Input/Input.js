import { useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');

  }
  return (
    <label>
      <div className="form__title">{props.title}</div>
      <div className="form__inner">
        <input className='form__input' type={passwordType} placeholder={props.placeholder}
        />
        <div className='form__icon' onClick={togglePassword}>{props.iconInput}</div>
      </div>
    </label>
  )
}

export default Input