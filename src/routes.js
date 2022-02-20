
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';



const Routess = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route exact path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />

        <Route path="*" component={Erro} />
      </Routes>
    </Router>
  )
}

export default Routess;