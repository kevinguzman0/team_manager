import { Provider } from 'react-redux'
import store from './store'
import Jugadores from "./components/Jugadores";
import EquipoSelect from "./components/EquipoSelect";
import './css/styles.scss'


const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>TeamManager</h1>
        <Jugadores />
        <EquipoSelect />
      </main>
    </Provider>
  );
}

export default App;
