import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import { DataContextProvider } from './Context/DataContext';
import Resume from './Pages/Resume/Resume';
import Sales from './Pages/Sales/Sales';
import './style.css';
import Sale from './Pages/Sale/Sale';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='mainContainer'>
          <SideNav/>
          <main>
            <Header/>
            <Routes>
              <Route path="/" element={<Resume/>}/>
              <Route path="/sales" element={<Sales/>}/>
              <Route path="/sales/:id" element={<Sale/>}/>
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
