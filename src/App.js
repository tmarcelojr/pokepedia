import { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
// components
import Nav from './components/Nav'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import PokemonList from './pages/PokemonList'
import Favorites from './pages/Favorites'
// contexts
import UserContext from './contexts/UserContext.js'
// css
import './App.css';

const App = () => {
  // In able for us to use our context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchPokemon()

    // Dependency array: if empty, it will call useEffect once only when DOM Component loads
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")

      setPokeList(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  const addToFavorites = (pokemon) => {
    // When we click like inside Pokemon List, send clicked Pokemon back to App
    // Trigger this function to update our state
    // App will then pass our state as props to Favorites
    console.log('we added', pokemon)
    setFavorites([...favorites, pokemon])
  }

  // console.log('pokeList', pokeList)

  return (
    <div className="App">

      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap our all of our routes inside react router Routes component */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='pokemon/list' element={
            <PokemonList
              pokeList={pokeList}
              itemsPerPage={8}
              addToFavorites={addToFavorites}
            />
          } />
          <Route path='favorites' element={<Favorites favorites={favorites} />} />
        </Routes>

      </UserContext.Provider>

    </div>
  );
}

export default App;
