import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
import HomePage from './components/Home/HomePage/HomePage';
import Login from './components/Idintification/Login/Login';
import RequireAuth from './components/Idintification/RequireAuth/RequireAuth';
import SignIn from './components/Idintification/SignIn/SignIn';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';


function App() {


  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route
          path="manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  ); 
}

export default App;