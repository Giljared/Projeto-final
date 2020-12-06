import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Depoimentos from "../Pages/Depoimentos";
import Sobre from '../Pages/Sobre'
import Tutoriais from "../Pages/Tutoriais";
import Filmes from "../Pages/Filmes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/depoimentos" component={Depoimentos} /> 
        <Route path="/sobre" component={Sobre} /> 
        <Route path="/tutoriais" component={Tutoriais} />
        <Route path="/filmes" component={Filmes} />
          
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;