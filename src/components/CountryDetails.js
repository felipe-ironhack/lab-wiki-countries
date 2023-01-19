import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({countries}) => {
  const { id } = useParams();

  const [country, setCountry] = useState([])

  const getCountry = () => {
    const copy = [...countries]
    const filtered = copy.filter(country => country.alpha3Code === id)
    setCountry(filtered[0])
  }
  
  useEffect(() => {
      getCountry()
    }, [id])
    
  // const copy = [...countries]
  // const country = countries.filter(country => country.alpha3Code === id)[0]

  return (
  <div> 
    {country.name && 
      <>
      
        <h3> {country.name.common} </h3>
        <p> {country.alpha2Code} </p>
        
    
    
    
      </>
    } 
  </div>
)};

export default CountryDetails;
