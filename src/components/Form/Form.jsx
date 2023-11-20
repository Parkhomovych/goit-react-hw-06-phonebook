import { addContact } from 'redux/contactsSlice';
import { MyButton, MyForm } from './Form.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.children.name.value;
    const number = form.children.number.value;
    const id = nanoid(10)

    dispatch(addContact({ name, number,id }));
    form.reset();
  };
  return (
    <MyForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="number">Number</label>
      <input type="text" name="number" id="number" required />
      <MyButton type="submit">Add contact</MyButton>
    </MyForm>
  );
};
