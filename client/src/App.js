import { Routes, Route } from "react-router";

import Users from "./pages/Auth/User";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
