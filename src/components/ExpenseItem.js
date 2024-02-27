import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {

        dispatch({
            type: 'SUB_EXPENSE',
            payload: props.id,
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{color: 'white', backgroundColor: 'green', borderRadius: '50%', border: 'none', fontSize: '15px', width: '30px', height: '30px'}} onClick={event=> increaseAllocation(props.name)}>&#43;</button></td>
        <td><button style={{color: 'white', backgroundColor: 'red', fontSize: '20px', borderRadius: '50%', border: 'none'}} size='1.5em' onClick={decreaseAllocation}>&#9866;</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
