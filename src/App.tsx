import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import { DataContextProvider } from './Context/DataContext';
import Resume from './Pages/Resume/Resume';
import './Style.css';

function App() {
  return (
    <DataContextProvider>
      <div>
        <SideNav/>
        <main>
          <Header/>
          <Resume/>
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
