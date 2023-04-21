import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import Google from '../Icons/Google';
import Input from '../UI/Input/Input';
import './Login.scss'
import EyeIcon from '../Icons/EyeIcon';
import CrossIcon from '../Icons/CrossIcon';

const Login = () => {
    return (
        <div className="login">
            <div className="login__title">NFT Access</div>
            <div className="login__subtitle">
                Please fill your detail to access your account.
            </div>
            
            <form action="get" className='form'>
                <Input title="Email" placeholder='debra.holt@example.com' type="email" iconInput={<CrossIcon />}/>
                <Input title="Password" placeholder='••••••••' type="password" iconInput={<EyeIcon />}/>
            

                <div className="remember">
                    <Checkbox text="Remember me"/>
                    <a href='/' className="forgot">Forgot Password?</a>
                </div> 

                <Button addClass='_primary' title='Sign in' type='submit' />
            </form> 

            <Button addClass='_secondary' linkTo='/' title='Sign in with Google' typeBtn='_primary' icon={<Google />}/>
            <div className="sign">
                <a href="/">Don’t have an account? <span>Sign up</span></a>
            </div>
            
        </div>
    );
}
 
export default Login;