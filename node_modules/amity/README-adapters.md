# Amity Adapter API

## Set up services on amity_ keys
When setting up an adapter, the Amity server looks for arrays in keys beginning with `amity_`.  You can use multiple keys to help organize your adapter, but they won't be treated any differently by the Amity server.

## getStatus()
The getStatus method is optional.  The MongoAdapter uses it to report the serverStatus.  Here is an example:
```
getStatus: function(callback){
    var adminDB = this.db.admin();
    adminDB.serverStatus(function(err, status){
        callback(status);
    });
},
```
