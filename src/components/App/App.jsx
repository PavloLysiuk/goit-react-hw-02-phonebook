import { GlobalStyle } from 'GlobalStyles';
import { Container } from './App.styled';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import prevContacts from '../../data/prevContacts';

export class App extends Component {
  state = {
    contacts: prevContacts,
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <ContactForm title="Phonebook" onSubmit={this.addContact} />
        <ContactList
          title="Contacts"
          getContacts={this.filterContact()}
          onFilter={this.handleFilterChange}
          onDelete={this.deleteContact}
        />

        <GlobalStyle />
      </Container>
    );
  }
}
