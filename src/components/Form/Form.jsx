import { addContact } from 'redux/actions';
import { MyButton, MyForm } from './Form.styled';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputName = form.children.name;
    const inputNumber = form.children.number;

    dispatch(addContact(inputName.value, inputNumber.value));
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
