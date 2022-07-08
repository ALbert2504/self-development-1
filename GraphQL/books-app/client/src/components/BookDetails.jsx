import { useQuery } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { data: { book = null } = {} } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });


  const displayBookDetails = () => {
    if (!book) {
      return <p>No Books selected...</p>
    }

    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map(({ id, name }) => {
            return (
              <li key={id}>{name}</li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div id="book-details">
      <p>Output book details here</p>
      {displayBookDetails()}
    </div>
  );
};

export default BookDetails;

// -------v For Class Components
// export default graphql(getBookQuery, {
//   options: (props) => {
//     return {
//       variables: {
//         id: props.bookId,
//       },
//     };
//   },
// });


// --------v request without hooks and HOCs
// fetch('http://localhost:4000/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     query: `
//         {
//           books {
//           id
//           name
//           genre
//         }
//       }
//     `
//   })
// }).then(res => res.json()).then(data => console.log(data));