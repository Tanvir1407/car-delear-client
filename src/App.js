import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
import HomePage from './components/Home/HomePage/HomePage';
import Login from './components/Idintification/Login/Login';
import RequireAuth from './components/Idintification/RequireAuth/RequireAuth';
import SignIn from './components/Idintification/SignIn/SignIn';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';
import Update from './components/pages/Update/Update';
import AddItem from './components/pages/AddItem/AddItem';
import MyItem from './components/pages/MyItem/MyItem';
import NotFound from './components/pages/NotFound/NotFound';
import Blogs from './components/pages/Blogs/Blogs';


function App() {


  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory/:id"
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  ); 
}

export default App;