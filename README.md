Amity Database Manager
=========================

[![NPM](https://nodei.co/npm/amity.png?downloads=true&stars=true)](https://nodei.co/npm/amity/)

## Amity - a web-based database admin interface 

# NOT YET FULLY FUNCTIONAL
After making a JavaScript app duplicating functionality of the mongo-express project, I realized the potential for this app is far greater than just a MongoDB manager.  I started the year off with a grand-slam feature creep: Amity will manage multiple servers of different types (SQL, MongoDB, then more).  If you need a MongoDB manager right away, please use mongo-express.

Screenshots
-----------

<img src="http://i.imgur.com/P7q8eA3.png" title="Main Server Page - Tile Mode" />

<img src="http://i.imgur.com/1e7v2tb.png" title="Main Server Page - List Mode" />


Amity uses Node.js and Express on the server, CanJS and Steal on the client.  

It currently only supports MongoDB.

Features & Development Plan
--------

- [x] Connect to multiple servers. **v0.1** 
- [x] Support for replica set connections **v0.1**
- [x] Add databases over API without server restart. **v0.1** 
- [x] Upgrade Server to use [FeathersJS](http://feathersjs.com). **v0.1**
- [x] Realtime socket communication - using [FeathersJS](http://feathersjs.com) **v0.1** 
- [x] Flexible service setup **v0.1**
- [x] Dead-simple setup.  No more config files! **v0.1**
- [ ] Add databases from the browser without server restart. **v0.2** 
- [ ] Add tests for test-assisted development **v0.3** 
- [ ] Make more NPM friendly as sub-module. **v0.4**
- [ ] Allow it to use an internal Feathers server. **v0.4**
- [ ] Create MySQL service for [FeathersJS](http://feathersjs.com) **v0.5**
- [ ] Custom Adapter API (server side) **v0.7**
- [ ] SQL Adapter based on API **v0.8**
- [ ] Security Release **v1.0** 
- [ ] User authentication for app linked to DB credentials. **v1.0** 
- [ ] Token Auth/Login **v1.0** 
- [ ] Ready for public server. **v1.0** 
- [ ] Database blacklist/whitelist - Show/hide dbs. **v1.0** 

### MongoDB Support

- [x] Authenticate to MongoDB as admin to view all databases. **v0.1**
- [x] Connect and authenticate to individual MongoDB databases. **v0.1** 
- [ ] Handle bad auth **v0.2**
- [ ] **CRUD for Databases** - **v0.2** 
- [x] View Databases, based on permissions.
- [ ] Create Databases
- [ ] Rename Databases
- [ ] Drop Databases
- [ ] **CRUD for Collections** - **v0.2** 
- [x] View Collections
- [ ] Create Collections
- [ ] Rename Collections
- [ ] Delete Collections
- [x] **CRUD for Documents** - **v0.2**
- [x] View Documents
- [ ] Create Documents
- [ ] Modify Documents
- [ ] Delete Documents
- [ ] Drag and Drop documents between databases/collections.
- [ ] Drag and Drop entire collections between databases.
- [ ] Enable/Disable Trash Implementation for delete. **v0.2** 
- [ ] Use BSON data types in documents **v0.2** 
- [ ] Add/Remove Users from DB - **v0.3**
- [ ] Customizeable `document._id` property **v0.5**
- [ ] Web-based command-line MongoDB interface (Client Module) **v1.5**
- [ ] GridFS support?

### UI Goals:
* [x] JSON Editor view. **v0.1** 
* [ ] Grid view. - Select which fields to show for quick comparison. **v0.4** 
* [ ] Color-coded database tiles. **v0.4** 
* [ ] Drag and drop image/logos onto db tile.  Link or Upload to S3 or Dropbox(?) **v0.4** 
* [ ] When running the server without a configuration store, change the UI color to show that we're running in volatile mode. Shutting down the server without exporting the running-config will cause changes to be lost. **v0.6** 

### The Configuration Store

If an adapter is passed in the amity() function at startup, it will automatically be setup as the configuration store. 

![Mind Map of Current Plans](http://i.imgur.com/A6b2cdY.png)

Limitations
-----------

- Until version 1.0, this shouldn't be installed on a publicly-accessible server.

**Amity should only be used privately, for development purposes. The web interface can be used for executing malicious javascript on the MongoDB server. This will be improved by version 1.0.** 

**You can still access remote database servers, but it is highly recommended that your local machine is not available for remote web access while Amity is running.**



Installation
-----------

##1. Download

**From Github - recommended**

    git clone https://github.com/marshallswain/amity Amity

**From NPM:**

Not recommended, yet.

    npm install amity

Currently, you'll have to copy the module from the node_modules directory to the project directory and set up your config file and package.json.  This will be improved in the future.

## 2. Configure

A config file is no longer necessary.  Use a MongoDB adapter, and pass it a connection string.

```js
'use strict';

var feathers = require('feathers'),
  amity = require('amity'),
  bodyParser = require('body-parser');

// Prep the Feathers server.
var app = feathers()
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathers.socketio())
  .configure(feathers.rest());

// The config object is optional. Default prefix is 'api'.
var config = {apiPrefix:'api/v1'};
// Start Amity with the Amity MongoDB Adapter as a configuration store.
amity.start(app, config, new amity.adapters.MongoDB('mongodb://localhost:27017'));

// Start the server.
var port = 8081;
app.listen(port, function() {`````
  // app.use('/api/tasks', require('./services/tasks'));
  console.log('Feathers server listening on port ' + port);
});

```

## 3. Start the Server

    node server

Visit [http://localhost:8081](http://localhost:8081)

About Contributing
-----------

This project uses [Gulp](http://gulpjs.com), [StealJS](http://stealjs.com), and [can-compile](https://github.com/daffl/can-compile) for its build setup.  

Once you have the server up and running, open another terminal tab and run `gulp`.  It will watch for changes in the public/main directory and rebuild the files in the public/assets directory.  This will be further simplified in the near future when [CanJS](http://canjs.com) adds built-in support for [StealJS](http://stealjs.com).






## License

[MIT](http://opensource.org/licenses/MIT)

## Author

[Marshall Thompson](https://github.com/Glavin001)

Inspired by [mongo-express](https://github.com/andzdroid/mongo-express) by [Chun-hao Hu](https://github.com/andzdroid)
