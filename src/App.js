import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Faculty from "./pages/faculty/faculty";
import Attendence from "./pages/attendence/Attendence";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
          <Route index element={<Home/>}/>
          <Route path = "login" element={<Login/>}/>
          <Route path = "faculty" element={<Faculty/>}/>
          <Route path = "attendence-leave" element={<Attendence/>}/>
          <Route path = "userprofile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
