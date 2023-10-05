import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
import Profile from "./Pages/Profile";
import ForgotPass from "./Pages/ForgotPass";
import SingIn from "./Pages/SingIn";
import SingUp from "./Pages/SingUp";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-Pass" element={<ForgotPass />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
