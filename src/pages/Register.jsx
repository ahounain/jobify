import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
    <h1>Register</h1>
    {/* Using "Link" is much more efficient than an
    a href link because its basically the same thing as filing in what
    it "Links to" into your browser url entering thing  */}
    <Link to = "/login">Click to Login</Link>
    </div>
  )
}
export default Register