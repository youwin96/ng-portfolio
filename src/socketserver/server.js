const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, () => {
    console.log('listning on port 3000');
})

io.on('connection', (socket) =>{
    console.log('Client connected');
})