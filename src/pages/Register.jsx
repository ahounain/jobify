import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4> Register </h4>

        {/* default value tag just autofills the input to make it easier
          when troubleshooting login errors */}
        <FormRow type='text' name='name' defaultValue='john' />
        <FormRow type='text' name='last name' defaultValue='johnson' />
        <FormRow type='text' name='location' defaultValue='USA' />
        <FormRow type='email' name='email' defaultValue='johnson@john.com' />
        <FormRow type='password' name='password' defaultValue='johnson' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already signed up?
          <Link to='/login' className='member-btn'>
            {" "}
            Log In{" "}
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register