import Form from "../Form/Form";
import './Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login__title">NFT Access</div>
            <div className="login__subtitle">
                Please fill your detail to access your account.
            </div>
            <Form />
        </div>
    );
}
 
export default Login;