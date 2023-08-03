import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashBoardLayout'
const BigSideBar = () => {
  const {showSidebar} = useDashboardContext();

  return (
    <Wrapper> 
      
      <div 
        className = {
          showSidebar ? 'sidebar-container show-sidebar' :
          'sidebar-container'
        }
        >
      <div className = "content" >
        <NavLinks />
      </div>
      </div>
      </Wrapper>
  )
}
export default BigSideBar