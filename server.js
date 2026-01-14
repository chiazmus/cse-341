const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('./data/database');
const port = 3000;
 
app.use(cors());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port, () => {
      console.log('Database listening, Node running on port ' + (process.env.PORT || port));
    });
  }
});