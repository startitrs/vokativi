'use strict';

const fs = require( 'fs' );
const {GoogleSpreadsheet} = require( 'google-spreadsheet' );

( async () => {
    const creds = require( '../config/vokativi-acbbcd5883de.json' );
    const doc = new GoogleSpreadsheet( '1DOw_-l-ndcFfXWhD4fcpBx9f0dt9HypYIzLaAkQis_Q' );
    await doc.useServiceAccountAuth( creds );

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByTitle['vokativi']
    const rows = await sheet.getRows();

    let csv = 'IME,VOKATIV' + "\n";

    rows.forEach( ( row ) => {
        csv += row._rawData[0] + ',' + row._rawData[1] + "\n"
    } )

    fs.writeFileSync( '../imena.csv', csv.trim() );
} )();