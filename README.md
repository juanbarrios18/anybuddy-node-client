# Anybuddy - NodeJs Client API 

 Anybuddy NodeJs client API

## Installation

Use the package manager [npm](https://www.npmjs.com/package/anybuddy) to install Anybuddy API Client.

```bash
npm install --save anybuddy
```

## Usage

```script
const anybuddy = require('anybuddy-node-client')
 or
const { Organizer, Booking } = require('anybuddy-node-client)

const OrganizerApi = new anybuddy.Organizer(hostUrl, apiKey, authToken)
const BookingApi = new anybuddy.Booking(hostUrl, apiKey, authToken)

OrganizerApi.getById()             // get user by id
OrganizerApi.getByEmail()          // Get user by email
OrganizerApi.add()                 // Add user - return authentication token

BookingApi.search().               // Get search suggestions 
BookingApi.availabilities().       // Get courts availabilities
BookingApi.centerAvailabilities()  // Get Center availabilities
BookingApi.centerInfo()            // Ge center information
BookingApi.centerFeedbacks().      // Get center reviews


## License
[MIT](https://choosealicense.com/licenses/mit/)
