'use strict';

const fs = require("fs");

const json = {}

const data = fs.readFileSync("imena.csv").toString();

const rows = data.split("\n").slice(1);

rows.forEach((row) => {
    const columns = row.split(",");
    json[columns[0]] = columns[1]
})

fs.writeFileSync("imena.json", JSON.stringify(json));

console.log("Done.")