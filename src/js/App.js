// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Components
import { DataClient } from '../components/dataClient'
import { Breakfast } from '../components/chooseFood'
import OrderDetail from '../components/orderDetail';

class menu extends Component {

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/YenniferHurtado/LIM008-fe-burger-queen/develop/src/menu.json')
      .then(res => {
        this.setState({ data: res.data })
      }).catch(err => {
        console.log(err);
      })
  }
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
          <DataClient />
          <button onClick>DESAYUNO</button>
          <button onClick>ALMUERZO</button>
          {/* <Breakfast data={this.state.data}/>
          <Lunch data={this.state.data}/> */}
          <OrderDetail />
      </div>
    );
  }


}

class App extends Component {

render() {
  return(
    <div>
      <div className="logo">BURGUER QUEEN</div>
      <input
        type="text"
        className="nombre-mesero"
        name="nombreMesero"
        placeholder="Tú nombre"
      />    
    </div>
  )
}

} 


export default App;
