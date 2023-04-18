import {useForm} from 'react-hook-form';
import './Form.scss';

const Form = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>                
                <label>
                <div className="email">Email</div>
                <input className='email-input' type="email"
                    {...register("email", {
                        required: "Field is required",
                        minLength: {
                            value: 6,
                            message: 'Minimum 5 characters',
                        }
                    })}/>
                </label>
                <div className="error">
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </div>

                <label>
                <div className="pass">Password</div>
                <input className='pass-input' type="password"
                    {...register("password", {
                        required: "Field is required",
                        min: {
                            value: 6,
                            message: 'Minimum 6 characters',
                        }
                    })}/>
                </label>
                <div className="error">
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </div>
                
                
                <input className='btn__submit' type="submit" disabled={!isValid} />
            </form>
        </div>
    );
}
 
export default Form;