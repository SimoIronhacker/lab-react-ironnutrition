import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAdd from './components/FormAdd';
import Search from './components/Search';

class App extends React.Component {
  state = {
    foods: foods,
    displayForm: false,
  };

  handleAdd = (newFood) => {
    newFood.quantity = 0;
    this.setState({
      foods: [...this.state.foods, newFood],
      displayForm: !this.state.displayForm,
    });
  };

  handleSearch = val => {
    console.log("in handleSearch", val)
    // this.state.val.filter(foods) => (
      
          
    // )
    // utiliser val pour filter la liste de foods

  }

  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} />
        <button
          onClick={() =>
            this.setState({ displayForm: !this.state.displayForm })
          }
        >
          Add foooood
        </button>
        {this.state.displayForm && <FormAdd handleAdd={this.handleAdd} />}
        {this.state.foods.map((food) => (
          <FoodBox food={food} />
        ))}
      </div>
    );
  }
}

export default App;
