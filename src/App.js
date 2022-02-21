//@ts-check
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

import AboutCreator from './pages/AboutCreator'
import Activities from './pages/Activities';
import MyFavorites from './pages/MyFavorites';
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import MyActivities from './pages/MyActivities';
import ThemeToggle from './components/ThemeToggle';

// import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Footer />
      
      {/* <ThemeToggle /> */}
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/aboutcreator" element={<AboutCreator />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
        <Route path="/myactivities" element={<MyActivities />} />
      </Routes>

    </div>
  );
}

export default App;
