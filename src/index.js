import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Đảm bảo đường dẫn chính xác tới App.js
import './index.css'; // Đảm bảo đường dẫn tới file CSS chung (nếu có)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
