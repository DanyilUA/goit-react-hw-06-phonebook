import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterContacts } from 'redux/contacsReducer';
import { getFilter } from 'redux/selectors';

const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(filter);

useEffect(() => {
  if (!value) {
    dispatch(filterContacts(''));
  } else {
    dispatch(filterContacts(value));
  }
}, [value, dispatch]);
  
   const handleInputChange = event => {
     const filterValue = event.target.value;
     setValue(filterValue);
     dispatch(filterContacts(filterValue));
   };
  
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleInputChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;
