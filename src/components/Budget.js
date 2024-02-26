import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const {remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const setLimit = budget - remaining;

    const handleBudgetChange = (event) => {
        event.preventDefault();
        setNewBudget(event.target.value);

    };

    function submitChange () {
    
        if (newBudget > setLimit){
        dispatch ({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }else{
        alert('You cannot reduce the budget value lower than the spending')
        setNewBudget(budget);
        }

    }

    return (
<div className='alert alert-secondary'>
<span>Budget €</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{ width: '100px' }}></input>
<button className="btn btn-primary" onClick={submitChange} style={{ marginLeft: '1rem' }}>Update</button>
</div>
    );
};
export default Budget;