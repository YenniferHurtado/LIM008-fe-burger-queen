 
 import React, { Component } from 'react';

class Breakfast extends Component {

  render() {
    const buttonBreakfast = this.props.data.map((carta, i) => {
      if(carta.categoria === 'desayuno'){
    return (
        <div className="container">
          <div className="row">
            <div>
                <button>{ carta.item }
                </button>
           </div>
          </div>
        </div>
        )
      }});
      return (
      <div className="ml-2 mt-5 mb-4">
        <div> 
          <div>
          { buttonBreakfast }
          </div>
        </div>
      </div>
    );
  }
}

export class Lunch extends Component {

  render() {
    const buttonLunch = this.props.data.map((carta, i) => {
      if(carta.categoria === 'resto del día'){
    return (
        <div className="container">
          <div className="row">
            <div>
                <button>{ carta.item }
                </button>
           </div>
          </div>
        </div>
        )
      }});
      return (
      <div className="ml-2 mt-5 mb-4">
        <div> 
          <div>
          { buttonLunch }
          </div>
        </div>
      </div>
    );
  }
}

export default Breakfast;
