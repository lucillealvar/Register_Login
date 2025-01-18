import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
