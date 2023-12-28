import Navbar from './Components/Navbar'
import Notebook from './Components/Notebook';
import UserNotes from './Components/UserNotes';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={ <Notebook/>}/>
          <Route exact path ='/usernotes' element={<UserNotes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
