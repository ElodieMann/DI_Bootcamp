//App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Movie from './Components/Movie';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
