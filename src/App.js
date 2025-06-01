import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { Home } from './pages/Home/Index';
import { Login } from './pages/Login/Index';
import { Feed } from './pages/feed/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        </Routes>
      </Router>
  );
}

export default App;
