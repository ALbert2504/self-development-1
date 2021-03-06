import { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// Components
import BookDetails from './BookDetails';




class BookList extends Component {
  state = {
    selected: null,
  }

  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return (<div>Loading books..</div>)
    }
    return data.books.map(book => {
      return (
        <li key={book.id} onClick={() => { this.setState({ selected: book.id }) }}>{book.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <hr />
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }

}

export default graphql(getBooksQuery)(BookList);
