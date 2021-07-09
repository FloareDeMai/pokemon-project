import { Route, Switch } from 'react-router-dom';
import PokemonsPage from './components/PokemonsPage'
import TypeList from './components/TypeList'
import Layout from './components/Layout';
import PokemonDetail from './components/PokemonDetail';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';


function App() {
  const themeHook = useState("light")
  return (
    <ThemeContext.Provider value={themeHook}>
    <Layout>
    <Switch>
      <Route path="/pokemons" exact>
        <PokemonsPage/>
      </Route>
      <Route path="/types" exact>
        <TypeList/>
      </Route>
      <Route path="/pokemon/:id" render={(props) => (
        <PokemonDetail {...props}/>
      )}/>
    </Switch>
    </Layout>
   
 </ThemeContext.Provider>
  );
}

export default App;
