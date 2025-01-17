import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
