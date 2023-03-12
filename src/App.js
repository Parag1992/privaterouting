import logo from './logo.svg';
import './App.css';
import SimpleForm from './component/class_based/SimpleForm';
import TodoApp from './component/Todo';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/class_based/Login';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route path='/' element={<Header/>}>
              <Route path='/home'  element={<PrivateRoute comp={SimpleForm}/>}/>
              <Route path='/todo' element={<PrivateRoute comp={TodoApp}/>}/>             
            </Route>
            <Route path='*' element={<div>Error 404</div>}/>
          </Routes>
      
      </BrowserRouter>


      {/* <Link to="/SimpleForm">SimpleForm</Link> 
      <hr/>
      <TodoApp/>
      {/* <SimpleForm/> */}
    </div>
  );
}

export default App;
