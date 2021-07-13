let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './src/ws/stream' );
let path = require( 'path' );
const PORT =process.env.PORT || 3000;

app.use( '/assets', express.static( path.join( __dirname, '/src/assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/src/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

server.listen( PORT );
