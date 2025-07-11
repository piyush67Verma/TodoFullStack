import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import { isUserLoggedIn } from './services/AuthService';
function App() {


  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth)
    {
      return children;
    }

    return <Navigate to="/"></Navigate>
  }
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
          {/* http://localhost:5713/ */}
          <Route path='/' element={ <LoginComponent/>}></Route>

          {/* http://localhost:5713/todos */}
          <Route path='/todos' element={ 
            <AuthenticatedRoute>
              <ListTodoComponent/>
            </AuthenticatedRoute>
            }></Route>

          {/* http://localhost:5713/add-todo */}
          <Route path='/add-todo' element={   
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>}></Route>

          {/* http://localhost:5713/update-todo/45 */}
          <Route path='/update-todo/:id' element={   
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>}></Route>

           {/* http://localhost:5713/register */}
           <Route path='/register' element={ <RegisterComponent/>}></Route>

             {/* http://localhost:5713/login */}
             <Route path='/login' element={ <LoginComponent/>}></Route>

      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
