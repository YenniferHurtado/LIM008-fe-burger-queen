import React, { Component } from 'react';

class OrderDetail extends Component {

    render() {
      return (
        <div className="card ml-4 mr-4">
        <form onSubmit={this.handleSubmit} className="card-body">       
          <div className="form-group">
            <table>
              <thead>
                <tr>
                  <th className="d-inline p-4">Cantidad</th>
                  <th className="d-inline p-4">Producto</th>
                  <th className="d-inline p-4">Precio</th>
                  <th className="d-inline p-4">X</th>
                </tr>
              </thead>
            </table>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    )
  }
  
  }
  
  export default OrderDetail;
  