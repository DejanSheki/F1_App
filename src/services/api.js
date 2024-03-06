import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const apiData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [circuits, setCircuits] = useState([]);
  const [driversStandings, setDriversStandings] = useState([]);

  const instance = axios.create({
    baseURL: "https://api-formula-1.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
    },
  });

  useEffect(() => {
    const fetchCircuits = async () => {
      try {
        const result = await instance.get("/circuits");
        const data = await result.data.response;
        console.log(data);
        setCircuits(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchDriverStandings = async () => {
      try {
        const result = await instance.get('/rankings/drivers', {
          params: { season: 2024 }
        });
        const data = await result.data.response;
        console.log(data);
        setDriversStandings(data);
      } catch (error) {
        setError(error.messagge);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCircuits();
    fetchDriverStandings();
  }, []);

  return { circuits, driversStandings, isLoading, error };
};

export default apiData;


// 'https://api-formula-1.p.rapidapi.com/circuits'
//https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2023

// headers.set('X-RapidAPI-Key', '1d19f49b37msh1d4599e8a55f2acp1bf121jsn50f0e191e5e6');
// headers.set('X-RapidAPI-Host', 'api-formula-1.p.rapidapi.com');

// Driver data search lewi 'https://api-formula-1.p.rapidapi.com/drivers?search=Max%20Verstappen'
// Driver data name Lewis Hamilton 'https://api-formula-1.p.rapidapi.com/drivers?name=Lewis%20Hamilton'

// postman key PMAK-65dcb12c171bee0001ea808c-f5a0dc8fb4c9aee7864071b234a08292cf
// https://racingmike.com/api/v1.0/motogp-events?token=<token>&year=2023
//   'https://racingmike.com/api/v1.0/f1-constructorstandings?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023'
// https://racingmike.com/api/v1.0/motogp-events?token=557496ca-4d72-4f7f-b9bd-b7c558fdbd2a&year=2023

// token 557496ca-4d72-4f7f-b9bd-b7c558fdbd2a


