import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { Logo } from "../components";
import { useDashboardContext } from "../pages/DashBoardLayout";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        {/* When button is clicked it invokes the toggleSidebar
        function, which switches the value of showSidebar (T/F) */}
        <button type='button' className='toggle-btn' 
        onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>toggle/logout</div>

        <div>
          <Logo />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
