import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import Resume from './Pages/Resume/Resume';
import './Style.css';

function App() {
  return (
    <div>
      <SideNav/>
      <main>
        <Header/>
        <Resume/>
      </main>
    </div>
  );
}

export default App;
