//@ts-check
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import AboutCreator from './pages/AboutCreator'
import Activities from './pages/Activities';
import MyFavorites from './pages/MyFavorites';
import MyActivities from './pages/MyActivities';
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Footer /> */}
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
