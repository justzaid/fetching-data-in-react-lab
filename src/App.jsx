import './App.css'
import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import * as starshipService from './services/starshipService'

const App = () => {


  const [starships, setStarships] = useState([])
  
  const [search, setSearch] = useState('')

  const fetchaData = async () => {
    const data = await starshipService.index()
    setStarships(data.results)
  }

  useEffect(() => {
    fetchaData()
  }, [])

  // Function that grabs data from starshipList
  const handleSearch = (formData) => {
    // Accept Search form data
    // Send data to StarshipList component
    setSearch(formData)
  }
  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch handleSearch={handleSearch}/>
      <StarshipList starships={starships} search={search}/>
    </>
  );
}

export default App