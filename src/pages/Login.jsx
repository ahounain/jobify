import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'; 
import {Logo, FormRow} from '../components';
const Login = () => {
  return (
    <Wrapper>
      <form className = 'form'>
        <Logo />
        <h4> Login </h4>
        <FormRow type = "email" name = "email" defaultValue = "johnson@john.com"/>
        <FormRow type = "password" name = "password" defaultValue = "johnson"/>
        <button type = 'submit' className = "btn btn-block">Submit</button>
        <button type = "button" className = "btn btn-block">Explore </button>
        <p> Not a member yet?</p>
        <button type = 'button' className = "btn btn-block">Register</button>
      </form>


    </Wrapper>
  );
};
export default Login;
