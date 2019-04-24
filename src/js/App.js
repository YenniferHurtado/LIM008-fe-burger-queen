
import React, { Component } from 'react';
import axios from 'axios';
import DataClient from '../components/dataClient'
import Breakfast from '../components/orderLetter';
import Lunch from '../components/orderLetter';
import OrderDetail from '../components/orderDetail';

class App extends Component {

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/YenniferHurtado/LIM008-fe-burger-queen/orderData/src/menu.json')
    .then(res => {
      this.setState({ data: res.data})
      console.log(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
          <DataClient />
          <Breakfast data={ this.state.data }/>
          <Lunch data={ this.state.data } />
          <OrderDetail />
      </div>
    );
  }
}

export default App;
