import React from 'react';
import './App.css';

// function HelloWorld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       <h4>{props.mitexto}</h4>
//     </div>
//   )
// }

class HelloWorld  extends React.Component {

  state = {
    show : true
  }

  toggleShow() {
    this.setState({show: false})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mitexto}
          <button onClick={this.toggleShow.bind()}>cambia estado</button>
        </div>
      )
    } else
    {
      return <h2>no hay elementos</h2>
    }
    
  }
}

function App() {
  return (
    <div>imprimo un 
      <HelloWorld mitexto="uno" subtitle="estiloso"/>
      <HelloWorld mitexto="dos" subtitle="pulentosos"/>
      <HelloWorld mitexto="tres" subtitle="bakanaso"/>
    </div>
  )
    
}

export default App;