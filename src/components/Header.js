import { useState } from 'react';


function Header(props) {
  const [saudacao, setSaudacao] = useState('bem-vindo');

  // console.log(saudacao[0])
  // console.log(saudacao[0])

  // saudacao[1]('olá mundo')
  // setSaudacao('olá mundo')

  return (
  <>
    <h1 className="text-center h1">Informações de cada país {saudacao}</h1>
  </>
  );
}

export default Header;
