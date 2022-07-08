import { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';




class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    authorId: '',
  }


  displayAuthors() {
    const { getAuthorsQuery: data } = this.props;
    if (data.loading) {
      return (<option disabled>Loading Authors...</option>);
    }
    return data.authors.map(author => {
      return (
        <option key={author.id} value={author.id}>{author.name}</option>
      );
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    const {name, genre, authorId} = this.state;
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  }

  render() {
    console.log(this.props);
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={this.handleChange}>
            <option hidden>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>

      </form>
    );
  }

}

export default compose(
  graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}),
  graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook);
