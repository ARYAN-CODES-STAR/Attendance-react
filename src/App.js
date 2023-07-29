import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import Sidebar from './components/Sidebar.js';
import Home from './components/Home.js';
import Classlist from './components/Classlist.js';
// import { Route,Link, Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/class' element={<Classlist />}/>
      </Routes>
    </Router>
   







  //  <div>
  //     <Sidebar />
  //     <Home />
  //     <Link to={/}>
  //       <button> new pge</button>
  //     </Link>
  //     <Route path="/new-page" component={NewPage} />
  //     <Classlist />
  //  </div>
  // <Router>
  //      <div>
  //       <h1>Main Page</h1>
  //       <Home />

  //       <Link to="/new-page">
  //       <Sidebar />
  //         <button>Go to New Page</button>
  //       </Link>
  //       <Route path="/new-page" component={Classlist} />
  //     </div>
  // </Router>
  );
}

export default App;
