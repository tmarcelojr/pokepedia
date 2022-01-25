import { useContext } from 'react'
// components
import Nav from './components/Nav'
// contexts
import UserContext from './contexts/UserContext.js'
// css
import './App.css';

function App() {
  // In able for us to use our context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  return (
    <div className="App">

      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value={'Christina'}>
        <Nav />
      </UserContext.Provider>

    </div>
  );
}

export default App;
