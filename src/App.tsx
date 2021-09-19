import { ChartProvider } from "./contexts/chartDataContext";
import { BrowserRouter, Route} from 'react-router-dom';
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { NegociosFechados } from "./pages/NegociosFechados";

function App() {
  return (
    <ChartProvider>
      <BrowserRouter>
				<Header />
        <Route path="/" exact component={Home}/>
        <Route path="/negociosfechados" component={NegociosFechados}/>
      </ BrowserRouter>
    </ChartProvider>
  );
}

export default App;
