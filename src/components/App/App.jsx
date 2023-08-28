import { GlobalStyle } from 'GlobalStyles';
import { Container, Title } from './App.styled';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import prevContacts from '../../data/prevContacts';

export class App extends Component {
  state = {
    contacts: prevContacts,
    name: '',
  };
  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Filter />
        <Title>Contacts</Title>
        <ContactList />
        <GlobalStyle />
      </Container>
    );
  }
}
