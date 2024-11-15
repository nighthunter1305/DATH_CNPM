import "./App.css";
import LogInForm from "./pages/login/LogInForm";
import SignUpForm from "./pages/signup/SignUpForm";
import Cart from "./pages/cart/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SellerChannel from "./pages/sellerChannel/SellerChannel";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller" element={<SellerChannel />} />
      </Routes>
    </Router>
  );
}

export default App;
