import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    

    return (
        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setNewCurrency(event.target.value)} >
        <option value="Dollar" name="dollars" defaultValue >Dollar</option>
        <option value="Pound" name="pound">Pound</option>
        <option value="Euro" name="euro">Euro</option>
        <option value="Ruppee" name="ruppee">Ruppee</option>s
        </select>
    );
};
export default Currency;