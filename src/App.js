import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from "./components/Footer/Footer";
import './App.css';
import { ProductProvider } from './ProductContext';
import Statusbar from './components/Statusbar/Statusbar';
import AboutNavbar from './components/AboutNavbar/AboutNavbar';
import AboutFooter from './components/AboutFooter/AboutFooter';
import Aboutus from "./components/Aboutus/Aboutus";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAboutPage = location.pathname.startsWith('/about');


  return (
      <>
        {isAboutPage ? <AboutNavbar /> : <Navbar />}
        <main>{children}</main>
        {isAboutPage ? <AboutFooter/> : <Footer />}
      </>
  );
};

const App = () => {
  return (
      <ProductProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/status" element={<Statusbar />} />
              <Route path="/all" element={<Statusbar />} />
              <Route path="/waitpay" element={<Statusbar />} />
              <Route path="/transfer" element={<Statusbar />} />
              <Route path="/waitdelivery" element={<Statusbar />} />
              <Route path="/completed" element={<Statusbar />} />
              <Route path="/canceled" element={<Statusbar />} />
              <Route path="/return-refund" element={<Statusbar />} />

              {/* Trang Aboutus */}

              <Route path="/about" element={<Aboutus />}>
              </Route >
            </Routes>
          </AppLayout>
        </Router>
      </ProductProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
