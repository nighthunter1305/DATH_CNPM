import "./App.css";
import LogInForm from "./pages/login/LogInForm";
import SignUpForm from "./pages/signup/SignUpForm";
import Cart from "./pages/cart/Cart";
import AddProduct from "./pages/addproduct/AddProduct";
import SellerChannel from "./pages/seller/SellerChannel";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/seller"
          element={
            <ProtectedRoute>
              <SellerChannel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/seller/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
