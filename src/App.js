import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
 
  const performAPICall =  () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }

  useEffect(() =>{
   if (text==="")
    {performAPICall();
   setText("");}
  if(text !=="")
     {let filteredCountries = countries.filter((item) => item.name.common.toLowerCase().includes(text.toLowerCase()));
    setCountries(filteredCountries);}
  }, [text, countries]);

  

  
  return (
    <div>
      <input
        id="search"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for countries.."
      />
      <div className = "containerCard">
        {countries.map((country) => (
          <div  key={country.ccn3} className ="countryCard">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className = "imageStyle"
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
