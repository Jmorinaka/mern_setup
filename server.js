const express = require('express');
const PORT = process.env.PORT || 9000;


const app = express();


app.get('/', (req,res) => {
    res.send('<h1>App is working! </h1>');
});

app.get('/test-route', (req, res) => {
    console.log("Where am I")
    res.send('<h1>This is a test route, if you see this thumbs up!</h1>')
})

app.listen(PORT, () => {
    console.log('App listening on port!!' + PORT)
});