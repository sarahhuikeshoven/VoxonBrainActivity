# module used to run co-routines
import asyncio
import time
import websockets
import json

# On new message from Websocket client
async def consumer_handler(websocket, path):
    async for message in websocket:
        # print(f"message received started at {time.strftime('%X')}")
        print("Message:", message)
        # try:
        #     jsonObject = await parseJSON(message)
        #     x = jsonObject["room"]
        #     y = jsonObject["command"]
        #     await message_handler[y](x)
        # except KeyError:
        #     await handle_default(message)

# Added def to handle parse error
async def parseJSON(message):
    try:
        jsonObject = json.loads(message)
    except:
        print('Error while parsing msg')
    else:
        return jsonObject