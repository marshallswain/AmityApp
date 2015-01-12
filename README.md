Amity Database Manager
=========================

[![NPM](https://nodei.co/npm/amity.png?downloads=true&stars=true)](https://nodei.co/npm/amity/)

## Amity - a web-based database admin interface 

# NOT YET FUNCTIONAL
This project started out as a fork of the mongo-express project.  For the next couple of weeks, while it is being rebuilt, please use mongo-express for now.

Amity uses Node.js and Express on the server, CanJS and Steal on the client.  

It currently only supports MongoDB.

Features
--------

The very near future:

* Connect to multiple servers.
* Add/Remove databases from the browser.  No server restart necessary.
* Connect and authenticate to individual databases
* Authenticate as admin to view all databases
* Database blacklist/whitelist
* MongoDB support for...
* View/add/rename/delete collections
* View/add/update/delete documents
* Use BSON data types in documents

Planned features:

* Upgraded Security - Not for public setup, yet.
* Realtime socket communication - using [FeathersJS](http://feathersjs.com)
* Flexible service setup - using [FeathersJS](http://feathersjs.com)
* SQL Support - using [FeathersJS](http://feathersjs.com)
* Support for replica set connections
* Web-based command-line interface (maybe)
* User authentication for app linked to DB credentials.


Limitations
-----------

* Until version 1.0, this shouldn't be installed on a publicly-accessible server.
* Documents must have `document._id` property to be edited
* No GridFS support (might become a planned feature)
* Binary BSON data type not tested

**Amity should only be used privately, for development purposes. The web interface can be used for executing malicious javascript on a server. This will be improved by version 1.0.** 

**You can still access remote database servers, but it is highly recommended that your local machine is not available for remote web access while Amity is running.**


Screenshots
-----------

<img src="http://i.imgur.com/P7q8eA3.png" title="Main Server Page - Tile Mode" />

<img src="http://i.imgur.com/1e7v2tb.png" title="Main Server Page - List Mode" />

Installation
-----------

##1. Download

**From Github - recommended**

    git clone https://github.com/marshallswain/amity Amity

**From NPM:**

    npm install amity

Then copy the module from the node_modules directory to the project directory and set up your config file and package.json.  This will be improved in the future.

## 2. Configure

Copy or rename `config.default.js` into a new file called `config.js`.

Fill in your MongoDB connection details, and any other options you want to change.

## 3. Start the Server

    node app

Visit `http://localhost:8081` or whatever URL/port you entered into your config.

About Contributing
-----------

This project uses [Gulp](http://gulpjs.com), [StealJS](http://stealjs.com), and [can-compile](https://github.com/daffl/can-compile) for its build setup.  

Once you have the server up and running, open another terminal tab and run `gulp`.  It will watch for changes in the public/main directory and rebuild the files in the public/assets directory.  This will be further simplified in the near future when [CanJS](http://canjs.com) adds built-in support for [StealJS](http://stealjs.com).


Development Plan
-----------
**0.1** 
- [x] Upgrade to FeathersJS

**1.0** - Security upgrades in place, ready for public server.
  * **1.1** Add tests for test-assisted development

**2.0** ~~Upgrade to FeathersJS - This will happen once FeathersJS supports adding and removing services at runtime.~~  Completed early.
  * **2.1** - Custom Adapter support (server side)
  * **2.2** - Realtime Websocket support (client side)



## License

[MIT](http://opensource.org/licenses/MIT)

## Author

[Marshall Thompson](https://github.com/Glavin001)

Based on [mongo-express](https://github.com/andzdroid/mongo-express) by [Chun-hao Hu](https://github.com/andzdroid)
