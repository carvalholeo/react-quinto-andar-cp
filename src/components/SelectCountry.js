import tipagem from 'prop-types';

function SelectCountry(props) {
  const batata = props.batata
  return (
    <>
      <label htmlFor="id-pais">Selecione o país</label>
      <select id="id-pais" name="pais" defaultValue="0">
        <option value="0" disabled>Selecione</option>
        {
          batata.map((item, index) => {
            return (
              <option value={item.value} key={index}>{item.text}</option>
            );
          })
        }
        <option value="kkkkkkkkkkkkkk">Melhor país do mundo</option>
      </select>
    </>
  );
}

SelectCountry.propTypes = {
  batata: tipagem.arrayOf(tipagem.object),
  nome: tipagem.string
}

SelectCountry.defaultProps = {
  batata: [
    { value: 'brazil', text: "Brasil" }
  ]
}

export default SelectCountry;
