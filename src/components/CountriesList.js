import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      <div className="col-4">
        {countries.map((country) => (
          <div className="card mt-1" key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <div className="card-body">
                {country.alpha2Code}
                {'  '}
                {country.name.common}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountriesList;
