import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterContacts } from 'redux/contactDetailsReducer';


const Filter = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);  

useEffect(() => {
  if (!value) {
    dispatch(filterContacts(''));
  } else {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterContacts(filteredContacts));
  }
}, [value, contacts, dispatch]);

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <label className={ css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;
