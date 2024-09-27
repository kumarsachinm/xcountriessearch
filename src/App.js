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
  }, [text, countries])

  
  const countryCard = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerCard = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

 

  return (
    <div>
      <input
        id="search"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for countries.."
      />
      <div style={containerCard}>
        {countries.map((country) => (
          <div id = "countryCard" key={country.ccn3} style={countryCard}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={imageStyle}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
