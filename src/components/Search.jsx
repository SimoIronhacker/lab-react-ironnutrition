import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    // update: this.props.food.update
  };

 handleChange = (evt) => {
    // console.log('change', evt.target.value);
    const value = evt.target.value
    // exécuter le callback handleSearch pour envoyer la valeur 
    // de 'l'input vers le composant parent (App)
    this.props.handleSearch(value)

}

  render() {
    console.log(this.props);
    return (
      <div className="box">
        <input
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
