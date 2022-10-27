import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Jesse P.', salary: 1200, increase: true, id: 1 },
                { name: 'Walter W.', salary: 5000, increase: false, id: 2 },
                { name: 'Saul G.', salary: 7200, increase: false, id: 3 }
            ]
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {  
            return {
                data: data.filter(item => item.id !== id)
            }
        }) 
    }
 

    addItem = (name, salary) => {
        const newData = {
            name,
            salary,
            increase: false,
            id: +Math.floor(Math.random() * 50)
        }
        this.setState(({ data }) => {
            const newArr = [...data, newData];
            return {
                data: newArr
            }
        });
    }


    render() {
        return (
            <div className="app" >
                <AppInfo /> 
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm 
                    onAdd={this.addItem} />
            </div>
        )
    }
}


export default App;