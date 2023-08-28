import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AboutUs from './pages/about/AboutUs';
import Menu from './pages/menu/Menu';
import MenuDetail from './pages/menu/menuDetail/MenuDetail';
import MenuCoffee from './pages/menu/MenuCoffee';
import MenuBeverage from './pages/menu/MenuBeverage';
import MenuTea from './pages/menu/MenuTea';
import FindStore from './pages/findStore/FindStore';
import Faq from './pages/faq/Faq';
import Notice from './pages/notice/Notice';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeWrite from './pages/notice/NoticeWrite';
import NoticeEdit from './pages/notice/NoticeEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/menu-detail/:idx" element={<MenuDetail />} /> */}
        <Route path="/menu/coffee" element={<MenuCoffee />} />
        <Route path="/menu/coffee/:id" element={<MenuDetail />} />
        <Route path="/menu/beverage" element={<MenuBeverage />} />
        <Route path="/menu/beverage/:id" element={<MenuDetail />} />
        <Route path="/menu/tea" element={<MenuTea />} />
        <Route path="/menu/tea/:id" element={<MenuDetail />} />
        <Route path="/store" element={<FindStore />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice-detail/:id" element={<NoticeDetail />} />
        <Route path="/notice-write" element={<NoticeWrite />} />
        <Route path="/notice-edit/:id" element={<NoticeEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
