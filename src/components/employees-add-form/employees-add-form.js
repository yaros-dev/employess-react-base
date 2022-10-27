import './employees-add-form.css'
import { Component } from 'react';

class EmployeesAddForm extends Component { 

    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => { 
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
     
    render() {
        const {name, salary} = this.state; 
        return (
            <div className="app-add-form">
                <h3>Додайте нового працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Ім'я працівника?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="ЗП в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
                    <button type="submit"
                        className="btn btn-outline-light" >Додати</button>
                </form>
            </div>
        )
    }
}

 

export default EmployeesAddForm;