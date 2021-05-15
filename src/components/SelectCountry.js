import {useState, useEffect} from 'react';
import tipagem from 'prop-types';

function SelectCountry(props) {
  const [pais, setPais] = useState('0');
  const batata = props.batata;

  useEffect(() => {
    console.log(pais)
  }, [pais])
  return (
    <>
      <label htmlFor="id-pais">Selecione o país</label>
      <select
        id="id-pais"
        name="pais"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      >
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
