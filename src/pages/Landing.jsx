import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import {
  Logo
} from '../components';
import { Link } from 'react-router-dom';

/* const StyledBtn = styled.button`
font-size: 1.5rem;
background: red;
color: withTheme;
`;
*/
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking </span>App
          </h1>
          <p>
            We are dynamically creating high standards in infomediaries.
            Rapidiously providing access to pandemic customer service.
            Enthusiastically plagiarizing fully researched e-commerce.
            Dynamically predominated compelling core competencies, while
            maintaining uniquely transition parallel fungibility.
          </p>

          <Link to = '/register' className = "btn register-link">
            Register
           </Link> 
          <Link to = '/login' className = "btn">
            Login / Demo User
            </Link> 
        </div>
        <img src = {main} alt = "job hunt" className = 'img main-img'></img>
      </div>
    </Wrapper>
  );
}


export default Landing