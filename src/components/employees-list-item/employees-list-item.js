import './employees-list-item.css'
import { Component } from 'react';

class EmployeesListItem extends Component {

    state = {
        increase: false,
        isStar: false
    }

    onIncrease = () => {
        this.setState({
            increase: !this.state.increase
        })  
    }

    onStar = () => {
        this.setState({
            isStar: !this.state.isStar
        })
    }


    render() {
         
        const { name, salary, onDelete } = this.props;
        const { increase, isStar } = this.state;

        const classNames = `list-group-item d-flex justify-content-between ${increase && 'increase'} ${isStar && 'like'} `; 
  
        return (
            <li className={classNames} >
                <span className='list-group-item-label' onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + `$`} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }


}

export default EmployeesListItem;