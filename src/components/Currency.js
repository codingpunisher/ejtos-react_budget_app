import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const listTitleStyle = {
        color: 'white',
        backgroundColor: 'lightgreen',
        border: 'none',
        borderRadius: '5px',
        padding: '5px',
        width: '150px'
      };

      const listOptStyle = {
        color: 'black',
        backgroundColor: 'lightgreen',
        border: 'none'
      };

      function updateCurrency (){
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
      };

    return (
        <div>
        <select style={listTitleStyle} id="inputGroupSelect01" onChange={(event) => setNewCurrency(event.target.value)} >
        <option style= {listOptStyle} value="$" name="dollars" >$ Dollar</option>
        <option style= {listOptStyle} value="£" name="pound" selected >£ Pound</option>
        <option style= {listOptStyle} value="€" name="euro">€ Euro</option>
        <option style= {listOptStyle} value="₹" name="ruppee">₹ Ruppee</option>
        </select>
        <button className="btn btn-primary" onClick={updateCurrency} style={{ marginLeft: '1rem' }}>Save</button>
        <span>{currency}</span>
        </div>
    );
};
export default Currency;