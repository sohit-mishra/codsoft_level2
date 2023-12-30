import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import List from './component/List';
import NavBar from './component/NavBar';
import QuizCreate from './component/QuizCreate';
import About from './component/About';
import Contact from './component/Contact';
import NoPage from './component/NoPage';
import Signin from "./component/Signin";
import Signup from './component/Signup';
import ForgotPassword from './component/ForgotPassword';
import ConfirmPassword from './component/ConfirmPassword.js';
import Quiz from './component/Quiz.js';
import Logout from './component/Logout.js';


function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact/>} />
          <Route exact path='/*' element={<NoPage/>} />
          <Route exact path='/Signin' element={<Signin />} />
          <Route exact path='/Signup' element={<Signup/>} />
          <Route exact path='/ForgotPassword' element={<ForgotPassword/>} />
          <Route exact path='/Logout' element={<Logout/>} />
          <Route exact path='/Quiz' element={<Quiz/>} />
          <Route exact path='/QuizCreate' element={<QuizCreate />} />
          <Route exact path='/List' element={<List/>} />
          <Route exact path='/ConfirmPassword' element={<ConfirmPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;