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

      </form>


    </Wrapper>
  );
};
export default Login;
