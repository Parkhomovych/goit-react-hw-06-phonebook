import { nanoid } from 'nanoid';

export const addContact = ( name, number ) => {

  return {
    type: 'contacts/addContacts',
    payload: {
      id: nanoid(10),
      name,
      number,
    },
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};

export const setDelete = id =>{
  return {
    type: 'contacts/setDelete',
    payload: id,
  };
}