import React, { Component } from 'react';

export class DataClient extends Component {

    constructor() {
        super(); 
        this.state = {
            numeroMesa: 0,
            nombreCliente: "",
            nombreMesero: ""
        };
        this.saveDataClient = this.saveDataClient.bind(this);
      }
      
      saveDataClient(e) {
        const {name, value} = e.target;
        this.setState({
          [name]: value,
        });
        console.log(this.state);
      }

      render() {
          return (
            <div>
            <div className="logo">
            <nav>
              <h4>BURGUER QUEEN</h4>
            </nav>
            </div>
            <div className="App">
              <nav className="navbar">
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
                  type="number"
                  className="mr-2"
                  name="numeroMesa"
                  placeholder="Número de mesa"
                  value = { this.state.numeroMesa }
                  onChange = { this.saveDataClient }
                  />
                </form>
              </nav>
            </div>
            </div>

        );
    }

}


