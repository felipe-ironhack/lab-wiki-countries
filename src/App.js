import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import countriesList from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex justify-content-between mt-5 pt-4">
        <div className="col align-items-start mt-3">
          <CountriesList countries={countriesList} />
        </div>
        <div className="col-5">
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countriesList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
