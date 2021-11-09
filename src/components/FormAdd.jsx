import React, { Component } from 'react'

class FormAdd extends Component {
    state = {
        name: '',
        calories: 0,
        url: ''
    }

    handleChange = (e) => {
        const key = e.target.id
        const value = e.target.value
        this.setState({
           [key] : value
        })

  
    }

    render() {
        return (
            <div>
                
                <h3>Add a new food</h3>

                <div>
                    <label htmlFor="name">Name: &nbsp;
                    <input type="text" id='name' value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="calories">Calories:&nbsp;
                    <input type="text" id='calories'  value={this.state.calories}  onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="url">URL:&nbsp;         
                    <input type="text" id='url'  value={this.state.url}  onChange={this.handleChange}/>
                    </label>
                </div>
                <button onClick={() => this.props.handleAdd(this.state)}>Submit</button>
               

            </div>
        )
    }
}

export default FormAdd
