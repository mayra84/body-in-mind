//@ts-check
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import SelectDate from './pages/SelectDate';
import AboutCreator from './pages/AboutCreator'
import Activities from './pages/Activities';
import MyFavorites from './pages/MyFavorites';
import { Link } from 'react-router-dom'

// import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Heading color={'brand.600'} >Body in Mind</Heading>


      <Breadcrumb color={'brand.500'}>
        <BreadcrumbItem>
          <Link  to="/"> Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/selectdate"> Calendar </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/activities"> Activities</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/myfavorites"> My Favorites</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link to="aboutcreator"> About the Creator</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectdate" element={<SelectDate />} />
        <Route path="/aboutcreator" element={<AboutCreator />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/myfavorites" element={<MyFavorites />} />
      </Routes>

    </div>
  );
}

export default App;
