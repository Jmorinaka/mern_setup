const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;



const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.send('<h1>App is working! Now with Nodemon!</h1>');
});

app.get('/test-route', (req, res) => {
    console.log("Where am I")
    res.send('<h1>This is a test route, if you see this thumbs up!</h1>')
});

app.get('/api/get-user', (req,res) => {
    res.send({username: "Bob1", email: 'bob@mail.com', name: 'Bob'})
});

app.get('/api/get-articles', (req,res) => {
    res.send(['article1', 'article2', 'article3']);
});

app.listen(PORT, () => {
    console.log('App listening on port!!' + PORT)
});