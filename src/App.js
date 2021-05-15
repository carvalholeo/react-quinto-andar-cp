import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Cabecalho from './components/Cabecalho';
import ConteudoPrincipal from './components/ConteudoPrincipal'
import Alface from './components/Relogio';


function App() {
  return (
    <div>
      <Cabecalho>
        <Alface />
        <Header título="blablabla"/>
        <Form />
      </Cabecalho>

      <ConteudoPrincipal>
        <div>
          <span>Bem-vindo ao conteúdo principal</span>
        </div>
        <h1>Conteúdo adicional</h1>
        <h2>Este é o terceiro filho</h2>
      </ConteudoPrincipal>
    </div>
  )
}

export default App
