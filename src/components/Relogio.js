import React, {useState, useEffect} from 'react';


class Clock extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     date: new Date(),
  //     meuNome: 'Leonardo'
  //   };
  // }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  //   this.setState({ meuNome: 'José' })
  // }

  // render() {
  //   return (
  //     <div>
  //       <h2>Horário de Brasília: {this.state.date.toLocaleTimeString()}. {this.state.meuNome}</h2>
  //     </div>
  //   );
  // }
}


function Clock2() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(
      () => setDate(new Date()),
      1000
    );
  }, []);

  return (
    <div>
      <h2>Horário de Brasília: {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default Clock2