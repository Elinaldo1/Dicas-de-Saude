import { useEffect, useState } from "react";
import Recepcao from "./components/Recepcao";
import './style.css';

const array = ["Chefe😎", "Chefia😉", "Chefinho✌", "Patrão"]

export default function App(params) {

  const [nutri, setNutri] = useState([]);

  useEffect(()=>{

    function loadApi(params) {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then( res => res.json()) 
      .then( res => {
        setNutri(res);
      })
    }

    loadApi();

  },[])

  const [admin, setAdmin] = useState('Super');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleChangeName(nome) {
    setAdmin(nome)
  };

  function handleRegister(e) {
    e.preventDefault();

    setUser({
      nome: nome,
      email: email,
      idade: idade
    })
  }

  return (
    <div className = 'container'>

      <h1>{admin}</h1>
      <button onClick={() => handleChangeName('Elinaldo')} >Muda nome</button>

      <div>
        <Recepcao name={array[0]} />
      </div>

      <form onSubmit={handleRegister} >
        <label>Nome:</label><br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Email:</label><br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Idade:</label><br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>

      </form>

      <br />

      {user.nome && 
        <div style={{ fontSize: 24, paddingLeft: '50%', alignItems: "center", backgroundColor: '#1002' }} >
            <span>
              <strong>Bem Vindo: </strong> {nome}
            </span>
            <br />
            <span>
              <strong>Email: </strong> {email}
            </span>
            <br />
            <span>
              <strong>Idade: </strong> {idade}
            </span>
        </div>}
        
        {
          nutri.map(item => {
          const {id, titulo, capa, subtitulo} = item;
          return(
            <article className='post' key= {id} >
              <strong className='titulo'>{titulo}</strong>
              <img src = {capa} alt = {titulo} className = 'capa' />
              <p className= 'subtitulo'>
              {subtitulo}
              </p>
              
              <a href = 'view post' className = 'botao'>Acessar</a>
              </article>
              )
            })
          }
    </div>

  )

}
