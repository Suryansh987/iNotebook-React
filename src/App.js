import Navbar from './Components/Navbar'
import Notebook from './Components/Notebook';
import UserNotes from './Components/UserNotes';
import Login from './Components/Login'
import Signup from './Components/Signup'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NoteState from './Context/NoteState';

function App() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Notebook />} />
            <Route exact path='/usernotes' element={<UserNotes />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
