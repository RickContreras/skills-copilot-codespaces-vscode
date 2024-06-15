// Create web server
// 1. Create a web server with express
// 2. Create a route for GET /comments
// 3. Send a response with an array of comments
// 4. Start the server and listen on port 3000
// 5. Test the route with Postman

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', text: 'Hello World' },
    { id: 2, author: 'Jane', text: 'Hi, nice to meet you' },
    { id: 3, author: 'Alice', text: 'Good morning' }
  ]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
