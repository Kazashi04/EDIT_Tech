import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
