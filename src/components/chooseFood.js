import React, { Component } from 'react';
import '../css/App.css';


export class OptionFood extends Component {
  render() {
    const optionFood = this.props.data.map((carta) => {
    return (
        <div>
           <div>
              <button>
              { carta.categoria }
              </button>
           </div>
        </div>
        )
      });
      return (
        <div> 
          <div>
          { optionFood }
          </div>
        </div>
    )
}}

export class Breakfast extends Component {
  render() {
    const buttonBreakfast = this.props.data.map((carta) => {
      if(carta.categoria === 'desayuno') {
    return (
        <div>
           <div>
              <button>{ carta.item }
              </button>
           </div>
        </div>
        )
      }});
      return (
        <div> 
          <div>
          { buttonBreakfast }
          </div>
        </div>
    );
  }
}


export class Lunch extends Component {
  render() {
    const buttonLunch = this.props.data.map((carta, i) => {
      if(carta.categoria === 'almuerzo'){
    return (
      <div>
        <div>
          <button>{ carta.item }
          </button>
        </div>
      </div>
        )
      }});
      return (
      <div className="mt-3">
        <div> 
          <div>
          { buttonLunch }
          </div>
        </div>
      </div>
    );
  }
}

