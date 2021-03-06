'use strict';

const fs = require( 'fs' );

const json = {}
let array = [];

const data = fs.readFileSync( '../imena.csv' ).toString();

const rows = data.split( "\n" ).slice( 1 );

/*
// Sortianje (quick & dirty)
rows.sort( ( a, b ) => {
    let col1 = a.split( ',' );
    let col2 = b.split( ',' );

    return col1[0].localeCompare( col2[0] );
} );

fs.writeFileSync( '../sorted.json', JSON.stringify( rows, null, 2 ) );
exit;
*/

rows.forEach( ( row ) => {
    const columns = row.split( ',' );
    json[columns[0]] = columns[1]

    array.push( {
        'IMENA': columns[0],
        'VOKATIV': columns[1],
    } );
} )

fs.writeFileSync( '../imena.json', JSON.stringify( json ) );
fs.writeFileSync( '../vokativi.json', JSON.stringify( array, null, 2 ) );

console.log( 'Done.' )
