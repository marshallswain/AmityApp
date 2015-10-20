import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';
import io from 'steal-socket.io';
const socket = io();

export const Server = can.Map.extend({
  define: {}
});

Server.List = can.List.extend({
  Map: Server
}, {});

export const serverConnection = superMap({
  url: '/amity/servers',
  idProp: 'name',
  Map: Server,
  List: Server.List,
  name: 'server'
});

tag('server-model', serverConnection);

socket.on('servers created', server => serverConnection.createInstance(server));
socket.on('servers updated', server => serverConnection.updateInstance(server));
socket.on('servers removed', server => serverConnection.destroyInstance(server));

console.log(serverConnection.getList);

export default Server;
