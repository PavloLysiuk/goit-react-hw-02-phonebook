import { Title } from './ContactList.styled';

export const ContactList = ({ title }) => {
  return <div>{title && <Title>{title}</Title>}</div>;
};
