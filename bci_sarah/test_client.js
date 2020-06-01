// client.js
const csvParser = require('csv-parser');
const fs = require('fs');
const filepath = 'eeg_data.csv'
var jsondata = '{"action":"1", "command":"push"}'
const WebSocket = require('ws')
const url = 'ws://localhost:4321'
const connection = new WebSocket(url)
let list = []

// const delay = require('delay');
connection.onopen = () => {
  // connection.send('Message From Client') 
  // connection.send(jsondata)
  
  fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csvParser())
    .on('data', (row) => {
        // use row data
        // console.log(row);
        x = JSON.stringify(row)
        list.push(x)
        // console.log("json one ", x)
        // setTimeout(()=> {sendMessage(x);},5000)
        // sendMessage(x)
        // setInterval(sendMessage(x),1500)
    })

    .on('end', () => {
        // handle end of CSV
        sendMessage(list)
    })
}

connection.onerror = (error) => {
  // console.log(`WebSocket error: ${error}`)
  console.log('websocket error: ' + error.data)
}

connection.onmessage = (e) => {
  // console.log(e.data)
}

function sendMessage(data){
  // connection.send(JSON.stringify(data));
  
  // setTimeout(()=> {connection.send(data);},5000)
  for(i=0;i<list.length; i++){
    connection.send(data[i])
    // setTimeout(()=> {connection.send(data[i]);},5000)
  }

  // connection.send(data);
  
}