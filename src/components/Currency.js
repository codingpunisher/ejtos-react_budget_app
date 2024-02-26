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
        <option style= {listOptStyle} value="Dollar" name="dollars" defaultValue >$ Dollar</option>
        <option style= {listOptStyle} value="Pound" name="pound">£ Pound</option>
        <option style= {listOptStyle} value="Euro" name="euro">€ Euro</option>
        <option style= {listOptStyle} value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
        <button onClick={updateCurrency}>Save</button>
        </div>
    );
};
export default Currency;