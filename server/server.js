const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/users", { useNewUrlParser: true, useUnifiedTopology: true } )
.then( () => console.log("Connection Successful"))
.catch( (err) => console.log(err) );


// const express = require('express');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/user-management', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//   db.once('open', () => {
//     console.log('Connected to MongoDB');
//   });

  
// const app = express();
// const port = 27017; // Use the desired port number

// // Add your Express.js routes and middleware here

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

