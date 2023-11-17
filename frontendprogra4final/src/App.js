import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductCardList from './components/ProductCardList';
import ClientList from './components/ClientList';
import CategoryList from './components/CategoryList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, CssBaseline, Drawer, Typography } from '@mui/material';
import PersistentDrawerLeft from './components/Drawer';

function App() {
  return (
    // <Login/>
    //<ProductList/>
    //<ProductCardList/>
    //<ClientList/>
    //<CategoryList/>
    // <div>
    //   <PersistentDrawerLeft/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PersistentDrawerLeft />} />
      </Routes>
    </Router>

  );
}

export default App;
