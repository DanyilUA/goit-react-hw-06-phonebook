import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacsReducer';
import { getContacts, getFilter } from 'redux/selectors';


const Filter = () => {
  // const [inputValue, setInputValue] = useState('');
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

   const handleInputChange = event => {
     dispatch(filterContacts(event.currentTarget.value));
   };

    // useEffect(() => {
    //   if (!inputValue) {
    //     dispatch(filterContacts(''));
    //   } else {
    //     const filteredContacts = contacts.filter(item =>
    //       item.name.toLowerCase().includes(inputValue.toLowerCase())
    //     );
    //     dispatch(filterContacts(filteredContacts));
    //   }
    // }, [contacts, inputValue]);


  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;
