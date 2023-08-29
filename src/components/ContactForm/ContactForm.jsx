import { Title, FormInput, AddButton } from './ContactForm.styled';

export const ContactForm = ({ title, onSubmit }) => {
  return (
    <div>
      {title && <Title>{title}</Title>}
      <FormInput
        type="text"
        name="name"
        placeholder="Full Name (Example: Pavlo Lysiuk)"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <FormInput
        type="tel"
        name="number"
        placeholder="Phone number (Example: XXX-XX-XX)"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddButton type="submit">Add contact</AddButton>
    </div>
  );
};
