const express = require( 'express' );
const app = express();
const path = require( 'path' );
const PORT = 3000;

app.get( "/sendfile", ( req, res ) => {
  res.sendFile( path.join( __dirname + '/images/car.jpg' ) );
});

app.get( "/download", ( req, res ) => {
  res.download( path.join( __dirname + '/images/car.jpg' ) );
});

app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );