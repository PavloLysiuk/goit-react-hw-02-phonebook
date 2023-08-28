import { GlobalStyle } from 'GlobalStyles';
import { Container } from './App.styled';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
import prevContacts from '../../data/prevContacts';

export class App extends Component {
  state = {
    contacts: prevContacts,
    name: '',
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <ContactForm title="Phonebook" />
        {/* <Filter /> */}
        <ContactList
          title="Contacts"
          getContacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
