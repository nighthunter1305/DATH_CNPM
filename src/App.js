import "./App.css";
import LogInForm from "./pages/login/LogInForm";
import SignUpForm from "./pages/signup/SignUpForm";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        {/* Route cho dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
