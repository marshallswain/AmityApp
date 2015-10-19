import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

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

export default Server;
