import { getContacts, getFilter } from 'redux/selectors';
import { Button, Item, List } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setDelete } from 'redux/actions';
export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              onClick={() => {
                dispatch(setDelete(id));
              }}
              type="button"
            >
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
};
