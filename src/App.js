
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory category='men'/>}/>
    <Route path='/women' element={<ShopCategory category='women'/>}/>
     <Route path='/kids' element={<Shop/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
