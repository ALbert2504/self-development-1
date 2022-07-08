import { Component } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from 'react-apollo'

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()

});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Hello</h1>
          <BookList />
          <hr />
          <AddBook />authors
        </div>
      </ApolloProvider>

    );
  }

}

export default App;
