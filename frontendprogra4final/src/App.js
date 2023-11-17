import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductCardList from './components/ProductCardList';
import ClientList from './components/ClientList';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box, CssBaseline, Drawer, Typography } from '@mui/material';
import PersistentDrawerLeft from './components/Drawer';

function App() {
  return (
    // <Login/>
    //<ProductList/>
    //<ProductCardList/>
    //<ClientList/>
    //<CategoryList/>
    <div>
      <PersistentDrawerLeft/>
    </div>

  );
}

export default App;
