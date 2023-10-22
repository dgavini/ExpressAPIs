const express = require('express');
const app = express();
require('dotenv').config();
const fs = require('fs');



const port = process.env.PORT;
const jsonFilePath = 'data.json';

app.get('/login', (req, res) => {

  const loginData = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  };
  res.json(loginData);
});


app.get('/users', (req, res) => {

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);
    const extractedData = jsonData.map((item) => {
      return {
        name: item.name,
        username: item.username,
        email: item.email
      };
    });

    res.json(extractedData);
  });
  //res.json(usersData);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
