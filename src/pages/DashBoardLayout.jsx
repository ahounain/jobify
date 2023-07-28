import {Outlet} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSidebar, Navbar, BigSidebar } from '../components';
import {useState} from 'react';

const DashBoardLayout = () => {
  const user = {name: 'john'}
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  }

  const logoutUser = async  () => {
    console.log('logout user');
  };
  return(
  <Wrapper>
    <main className='dashboard'>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </div>
    </main>
  </Wrapper>
  
)};
export default DashBoardLayout;
