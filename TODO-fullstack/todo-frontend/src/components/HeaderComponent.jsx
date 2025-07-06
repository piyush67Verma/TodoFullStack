import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {

  let isAuth = isUserLoggedIn();

  let navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/login")
  }


  return (
    <div>
        <header>
            <nav className='navbar bg-dark navbar-expand-lg border-bottom border-body' data-bs-theme="dark">
                <div>
                    <a href='http://localhost:5173/' className="navbar-brand m-2">
                        Todo management Application
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    {
                        isAuth && <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to="/todos" className='nav-link text-white m-2'>Todos</NavLink>
                        </li>
                    </ul>
                    }
                </div>
                <ul className='navbar-nav'>
                   {
                        isAuth==false && <>
                        
                        <li className='nav-item'>
                            <NavLink to="/register" className='nav-link text-white m-2'>Register</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/login" className='nav-link text-white m-2'>Login</NavLink>
                        </li>
                        
                        </>
                   }
                   {
                        isAuth &&   <li className='nav-item'>
                        <NavLink to="/login" className='nav-link text-white m-2'
                            onClick={()=>{handleLogout()}}
                        >Logout</NavLink>
                        </li>
                   }
                </ul>
                
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent