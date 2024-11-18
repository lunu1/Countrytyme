import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import './navbarHome.scss';
import { Home } from '../../Svg';

const NavbarHome = () => {

    const navigate = useNavigate();

  return (
    <div className='navbarhome' >
     
     <div className="logo">
        <Link to='/'>
        <img src="/Logo1.png" alt="Logo" />
        </Link>
     </div>
     <div className='home'>
        <Home/>
        <button onClick={()=>navigate('/')}>Back to home</button>
     </div>
    

    </div>
  )
}

export default NavbarHome;