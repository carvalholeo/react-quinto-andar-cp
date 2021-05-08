function ConteudoPrincipal(props) {
  return (
    <main className="space">
      <p>Nome: </p><span id="nome">Sem conteúdo</span>
      <p>Sigla: </p><span id="sigla">Sem conteúdo</span>
      <p>Capital: </p><span id="capital">Sem conteúdo</span>
      <p>Região: </p><span id="regiao">Sem conteúdo</span>
      <p>DDI: </p><span id="ddi">Sem conteúdo</span>
      { props.children }
    </main>
  );
}

export default ConteudoPrincipal;
