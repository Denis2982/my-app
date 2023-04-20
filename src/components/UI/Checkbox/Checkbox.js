import CheckMarckIcon from '../../Icons/CheckMarckIcon';
import './Checkbox.scss';

const Checkbox = (props) => {
  return (
    <label className='checkbox'>
        <input className='checkbox__input' type="checkbox" />
        <span className='checkbox__checkmark'><CheckMarckIcon /></span>
        <span className='checkbox__text'>{props.text}</span>        
    </label>
  )
}

export default Checkbox