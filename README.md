# pinsOnMap

# What are the liibraries used?

On backend I used NODE.JS with express server with socket.io (for real time data updates)

On the front end I used React with Chakra for some styling and react-map-gl (MapBox wrapper) to display map.

Both sides were coded with Typescript.

# How it works ?

Our server on start is creating fleet of 10 planes (names are fetched from randomuserapi and coords are randomized), and then it emits it on a socket.
In intervals (every 5 seconds) our coordinates are updated and emited on a socket.

Client-side gets the data and shows it on a map, with labels and plane icons. You can zoom in/out and move map however you like it.
On the right side we can see searchbox with our fleet listed (names and last coords). You can search by name of pilots to see if they are in our fleet.

# How to run it ?

First for server :

- go to server folder
- download libraries with "yarn"
- compile files with "yarn tsc", this commend will create dist folder containing js files
- if you have your dist folder run "yarn dev" to start server
- **alternative** run "yarn start-ts" to run server out of .ts files

Client-side :

- go to web folder
- download libraries with "yarn"
- run "yarn start", it should automaticly open webbrowser and show application if not go to localhost:3000

created by @szymonjakubsadowski
