import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Protected';

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
         <Route path="/"  element={<Login/>}/>
         <Route path="/dashboard"  element={<Protected><Dashboard /></Protected>} />
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    
  );
}

export default App;
