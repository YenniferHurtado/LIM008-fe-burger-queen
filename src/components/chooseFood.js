import React, { Component } from 'react';
import '../css/App.css';


export class Breakfast extends Component {
  render() {
    const detailBreakfast = this.props.data.map((carta) => {
      if(carta.categoria === 'desayuno') {
    return (
        <div>
          <button>{ carta.item }
          </button>
        </div>
        )
      }});
      return (
        <div className="show-food"> 
          { detailBreakfast }
        </div>
    );
  }
}

export class Lunch extends Component {
  render() {
    const detailLunch = this.props.data.map((carta, i) => {
      if(carta.categoria === 'almuerzo'){
    return (
      <div>
          <button>{ carta.item }
          </button>
      </div>
        )
      }});
      return (
        <div className="show-food mt-3"> 
          { detailLunch }
        </div>
    );
  }
}

