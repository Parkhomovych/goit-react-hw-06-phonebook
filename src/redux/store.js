import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const rootReduscer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'filter/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'contacts/setDelete': {
      return {
        ...state,
        contacts: state.contacts.filter(elem => elem.id !== action.payload),
      };
    }
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
const enhancer = devToolsEnhancer();

export const store = createStore(rootReduscer, enhancer);
