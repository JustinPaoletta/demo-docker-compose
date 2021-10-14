const express = require('express');
const cors = require('cors');

const port = 4242;
const app = express();
app.use('*', cors());

app.get('/', (req, res) => {
    var data = {
        greeting: 'Hello',
        name: 'Justin'
    }
    res.send(data)
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
})