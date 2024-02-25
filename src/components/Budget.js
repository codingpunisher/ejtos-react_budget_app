import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');

    const handleBudgetChange = (event) => {
        event.preventDefault();
        setNewBudget(event.target.value);
            
            dispatch ({
                type: 'SET_BUDGET',
                payload: newBudget,
            });

    };

    return (
<div className='alert alert-secondary'>
<span>Budget:£{ budget } </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;