const { PeerServer } = require('peer');

const PORT = process.env.PORT || 5000;

const peerServer = PeerServer({ port: PORT, path: '/' });

peerServer.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
