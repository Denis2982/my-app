
import Checkbox from '../UI/Checkbox/Checkbox';
import Input from '../UI/Input/Input';
import './Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login__title">NFT Access</div>
            <div className="login__subtitle">
                Please fill your detail to access your account.
            </div>
            
            <form action="get" className='form'>
                <Input title="Email" placeholder='debra.holt@example.com' type="email" />
                <Input title="Password" placeholder='••••••••' type="password" />
            </form>

            <div className="remember">
                <Checkbox text="Remember me"/>
                <a href='/' className="forgot">Forgot Password?</a>
            </div>  
        </div>
    );
}
 
export default Login;