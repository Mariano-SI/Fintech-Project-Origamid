import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import { DataContextProvider } from './Context/DataContext';
import Resume from './Pages/Resume/Resume';
import Sales from './Pages/Sales/Sales';
import './style.css';

function App() {
  return (
    <DataContextProvider>
      <div className='mainContainer'>
        <SideNav/>
        <main>
          <Header/>
          <Resume/>
          <Sales/>
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
