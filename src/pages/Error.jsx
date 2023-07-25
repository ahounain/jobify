import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  // sends errors to console
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to='/'> Back to Home</Link>
    </div>
  );
};
export default Error;
