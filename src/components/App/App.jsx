import { GlobalStyle } from 'GlobalStyles';
import { Container, NoContacts } from './App.styled';
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
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <ContactForm title="Phonebook" onSubmit={this.addContact} />
        {this.state.contacts.length > 0 ? (
          <ContactList
            title="Contacts"
            getContacts={this.filterContact()}
            onFilter={this.handleFilterChange}
            onDelete={this.handleDeleteContact}
          />
        ) : (
          <NoContacts>No contacts in phone book</NoContacts>
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
