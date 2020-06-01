const csvParser = require('csv-parser');
const fs = require('fs');
const filepath = 'run_4_trial_2_data.csv'
fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csvParser())
    .on('data', (row) => {
        // use row data
        console.log(row["Fz"]);
       
        
    })

    .on('end', () => {
        // handle end of CSV
    })