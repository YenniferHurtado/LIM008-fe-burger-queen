 
 import React, { Component } from 'react';
 import { menuOption } from '../menu.json';

class Breakfast extends Component {
  constructor() {
    super();
    this.state = {
      menuOption
    };
  }

  render() {
    const buttonBreakfast = this.state.menuOption.map((carta, i) => {
    return (
        <div className="col-md-4 ml-2 mb-4">
          <div className="card">
            <button>
              <h5>
                { carta.ProductoDesayuno }
              </h5>
            </button>
            
          </div>
        </div>
        )
      });
      return (
      <div>
        <div className="container row mt-2"> 
          { buttonBreakfast } 
        </div>
      </div>
    );
  }
}


export default Breakfast;
