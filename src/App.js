
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shops/>}/>
      <Route path='/mens' element={<ShopCategory cartegory='men'/>}/>
      <Route path='/womens' element={<ShopCategory cartegory='women'/>}/>
      <Route path='/kids' element={<ShopCategory cartegory='kid'/>}/>
      <Route path=':productId' element={<Product/>}/>
    {/* </Route> */}
    <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
