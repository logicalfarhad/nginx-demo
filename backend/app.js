const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors())
const persons = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
app.get('/persons', function (req, res) {
    res.json(persons);
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});