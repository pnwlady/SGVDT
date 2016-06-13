# Seattle Gun Violence Data Tracker

A [Code Fellows](https://www.codefellows.org/) project by [Heidi Laursen](https://github.com/pnwlady/SGVDT) [Maria Romero](https://github.com/MiaRomero/SGVDT)  [Shelly Yusuf](https://github.com/CWShelly/SGVDT)

### Purpose
This tool is designed to allow for granular searching of gun violence data from the data.seattle.gov database.

### Methods
Our service has automated data gathering. Upon deployment to Heroku our service queried the data.seattle.gov API to seed our database with incidents. Every 24hours the data tracker sends a request to the data.seattle.gov database, requests data then adds the new incidents to our database.

In its nascent form, users can create the simplest of accounts with a username, email address and password. Future versions will allow users to search the database by specifying their ZIP code (or Lat/Lon coordinates) and radius for data gathering, plus the date range in which they are interested.

### Installation
From a command line in the directory where the repository has been cloned:
```
npm install

export APP_SECRET="ssshhh"

node index
```
Do not close this instance of the terminal, nor close the connection.
Do note the port number that is reported.

### Use
The user will need to open a separate terminal from the one where the node instance is running. In the instructions below, 3000 should be replaced with whichever port number is reported from the instance of Node.

From the command line in the new terminal users can create an account by accessing the /signup route:
```
curl localhost:3000/signup username="user name" email=email@email.com password="password of your choice"
```

Once an account is created, users can return to it by accessing the /signin route:
```
curl localhost:3000/signin username="user name" password="password of your choice"
```

From a browser, users can filter the data using the following terms:
* offense
* summary (a summarized offense description. This must be in all caps; see example below.)
* year
* month
* day
* zone (sorts by SPD zone)

Use in the browser as follows once the Node server is running (as above):
```
localhost:3000/api/offenses?year=2015
```
The above will return all records for 2015

```
localhost:3000/api/offenses?year=2015&summary="ROBBERY"&zone="G3"
```
The above will return all records for 2015 that also contain "ROBBERY" in zone G3.

[HTTPie](https://github.com/jkbrzt/httpie) users search as follows:
```
http localhost:3000/api/offenses year==2016 month==5
```
Note: there is a space between offenses and year, and between 2016 and month. Each search term must use double-equals.

CURL users wrap the entire request in quotes:
```
curl 'localhost:3000/api/offenses?year=2016&month=5'
```
The above returns all incidents for May, 2016.

### Acknowledgements and Modules Used
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * [body-parser](https://www.npmjs.com/package/body-parser)
  * [express](https://www.npmjs.com/package/express)
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  * [mongoose](https://www.npmjs.com/package/mongoose)
  * [superagent](https://www.npmjs.com/package/superagent)

### Issues? Bug Reports?
[Report issues at Github](https://github.com/SGVDT/SGVDT/issues)

### Licensing
MIT licensed. See our [LICENSE](https://github.com/SGVDT/SGVDT/blob/master/LICENSE) document for more information.
