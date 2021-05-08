import SelectCountry from './SelectCountry';

function Form() {
  const selectValues = [
    { value: "australia", text: "Austrália" },
    { value: "brazil", text: "Brazil" },
    { value: "United States of America", text: "Estados Unidos" },
    { value: "mongolia", text: "Mongólia" },
    { value: "afghanistan", text: "Afeganistão" },
    { value: "united kingdom", text: "Reino Unido" },
    { value: "south africa", text: "África do Sul" },
    { value: "china", text: "China" },
    { value: "canada", text: "Canadá" },
    { value: "republic of india", text: "Índia" },
    { value: "argentina", text: "Argentina" },
    { value: "colombia", text: "Colômbia" },
    { value: "spain", text: "Espanha" },
    { value: "portugal", text: "Portugal" }
  ];
  return (
    <form className="space" style={{backgroundColor: "black"}}>
      <SelectCountry  />
    </form>
  );
}

export default Form;
