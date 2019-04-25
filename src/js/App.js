import React, { Component } from 'react';
import axios from 'axios';
import { DataClient } from '../components/dataClient'
import { Breakfast, Lunch, OptionFood } from '../components/chooseFood'
//import OrderDetail from '../components/orderDetail';

class App extends Component {

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
      data: []
    };
  }

  changeFood(e) {

  }

  render() {
    return (
      <div>
        <div>
          <DataClient />
          <OptionFood data={this.state.data}/>
          {/* <Breakfast data={this.state.data} /> */}
        </div>
      </div>
    );
  }
}

export default App;
