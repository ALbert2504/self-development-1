const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./shema/shema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin
app.use(cors());

// db
const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
  useUnifiedTopology: true,
};

const url = 'mongodb://127.0.0.1:27017/gphql-books';

mongoose.connect(url, options).then(() => {
  console.log('MongoDB is connected');
}).catch((err) => {
  console.log(err);
});
//


app.use('/graphql', graphqlHTTP.graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on 4000');
});