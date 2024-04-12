// import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Shop from './Pages/Shop'
// import Cart from './Pages/Cart'
// import ShopCategory from "./Pages/ShopCategory"
// import Product from "./Pages/Product"
// import LoginSignUp from './Pages/LoginSignUp'
// import Footer from './Components/Footer/Footer'
// import men_banner from './Components/Assets/banner_mens.png'
// import women_banner from './Components/Assets/banner_women.png'
// import kids_banner from './Components/Assets/banner_kids.png'
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}></Route>
//         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
//         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
//         <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
//         <Route path='/product' element={<Product/>}>
//           <Route path=':productId' element={<Product/>}></Route>
//         </Route>
//         <Route path='/cart' element={<Cart/>}></Route>
//         <Route path='/login' element={<LoginSignUp/>}></Route>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

// Custom component to handle route rendering and footer visibility
function AppRouter() {
  const location = useLocation();

  // Function to determine if the current route is login or signup
  const isAuthPage = () => {
    return location.pathname === '/login' || location.pathname === '/signup';
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      {/* Render the Footer component if not on login or signup page */}
      {!isAuthPage() && <Footer />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;


