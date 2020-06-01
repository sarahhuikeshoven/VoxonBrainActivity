# module used to run co-routines
import asyncio
import websockets
import argparse
from receivemessage import *
loop = asyncio.get_event_loop()
asyncio.ensure_future(websockets.serve(consumer_handler, '0.0.0.0', 8765))
loop.run_forever()

# # Start Websocket server on port 
# asyncio.get_event_loop().run_until_complete(
#     websockets.serve(consumer_handler, '0.0.0.0', 8765))
# asyncio.get_event_loop().run_forever()


    