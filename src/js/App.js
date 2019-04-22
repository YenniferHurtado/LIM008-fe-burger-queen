/* eslint-disable react/jsx-no-duplicate-props */

import React, { Component } from 'react';
import '../css/App.css';

// subcomponentes
import OrderDetail from '../components/order';
import Breakfast from '../components/orderLetter';

class App extends Component {
  constructor() {
    super(); //hereda la funcionalidad de react
    this.state = {
      menu,
      nombreCliente: "",
      nombreMesero: "",
      numeroMesa: "",
    };
    this.saveDataClient = this.saveDataClient.bind(this);
  }

  
  // handleAddPedido(pedido) {
  //   this.setState({
  //     menus: {...this.state.menus, pedido}
  //   })
  // }

  saveDataClient(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }


  render() {
    const butonMenu = this.state.menuOption.map((menu, i) => {
      return (
      <div className="col-md-4 ml-2 mt-5 mb-4">
        <div className="card">
          <button>
            <h4>{ menu.id }</h4>
          </button>
        </div>
      </div>
    ) 
  }); 
    return (
      <div className="App">
        <nav className="navbar navbar-black bg-dark">
          <form className="text-white">
            <input
            type="text"
            className="mr-2"
            name="nombreCliente"
            placeholder="Nombre del cliente"
            onChange = { this.saveDataClient }
            value = { this.state.nombreCliente }
            />
            <input
            type="text"
            className="mr-2"
            name="nombreMesero"
            placeholder="Nombre del mesero"
            onChange = { this.saveDataClient }
            value = { this.state.nombreMesero }
            />
            <input
            type="text"
            className="mr-2"
            name="numeroMesa"
            placeholder="Número de mesa"
            type="number"
            value = { this.state.numeroMesa }
            onChange = { this.saveDataClient }
            />
          </form>
        </nav>

         <div className="container"> 
            <div className="row mt-4">
              { butonMenu } 
           </div>
         </div>
       
         <Breakfast />
         <OrderDetail />
      </div>
      
    );
  }
}

export default App;
