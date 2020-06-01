// server.js
 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 4321 })
let action
let clients
let jsonObject
var jsondata = '{"action":"1", "command":"push"}'
var jsondata2 = '{"action":"2", "command":"push"}'
clients = []
wss.on('connection', ws => {
  clients.push(ws)
  // ws.send("hello from server")
  // ws.send(jsondata2)
    ws.on('message', function incoming(data) {
      
      // console.log("client array: ", client)
      console.log("message received from client: ", data)
      jsonObject = JSON.parse(data)
      // let keys = Object.keys(jsonObject)
      // action = jsonObject.Action
      // console.log('--received message--')
      // console.log(data);
      
      // console.log('jsonobject:', jsonObject)
      // ws.send(data)
      sendAll(data)
      // sendAll(jsondata)
      console.log("data send to clients: ", data)
      // console.log('action??>>', action)
    });
    
  // ws.send('Hello! Message From Server!!')
  
  // setTimeout(() => {  ws.send(jsondata); }, 5000);

  
  // ws.send(jsondata)
})

function sendAll (message) {
  
  for (var i=0; i<clients.length; i++) {
    clients[i].send(message)
  }
}
