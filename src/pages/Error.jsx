import { Link, useRouteError } from "react-router-dom";
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
const Error = () => {
  // sends errors to console
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src = {img} alt = "not found"/>
          <h1> page not found....</h1>
          <Link to = './dashboard'> Click here to go back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <div>
      <h3>something went wrong</h3>
      <Link to='/'> Back to Home</Link>
    </div>
  );
};
export default Error;
