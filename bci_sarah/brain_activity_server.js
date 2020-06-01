
const csvParser = require('csv-parser');
const fs = require('fs');
const filepath = 'run_4_trial_2_data.csv'

const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 1234 })
let action
let clients
let csvData
clients = []

    
wss.on('connection', ws => {
    clients.push(ws)
    console.log("clients : ", clients)
    // csvData = readCSVData
    ws.on('message', function incoming(data){
        
        console.log("csvData: " ,data)
        // ws.send(data)
        ws.send("hey")
    })
})


function readCSVData(){
    fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csvParser())
    .on('data', (row) => {
        // use row data
        // console.log(row["Fz"]);
        data = row
        
    })

    .on('end', () => {
        // handle end of CSV
    })
    return data
}




