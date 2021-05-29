const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 8000, path: '/peer' });

peerServer.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = process.env.PORT || 5000;

peerServer.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`))