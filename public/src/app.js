import AppMap from 'can-ssr/app-map';
import route from 'can/route/';
import 'can/map/define/';
import 'can/route/pushstate/';
import 'bootstrap';
import Server from 'amity-ui/models/server';

const AppViewModel = AppMap.extend({
  define: {
    servers: {
      get(lastSetVal, setVal){
        return Server.getList({}).then(setVal);
      }
    },
    title: {
      value: 'AmityDB',
      serialize: false
    },
    leftbarHidden: {
      value: false,
      serialize: false
    },
    leftSidebar: {
      value: 'data',
      serialize: false
    },
    dataPane:{
      value: 'servers',
      serialize: false
    },
    user: {
      value(){
        return {
          email: 'marshall@creativeideal.net',
        };
      },
      serialize: false
    }
  },
  setLeftSidebar(sidebar){
    this.attr('leftSidebar', sidebar);
  },
  toggleLeftbar(){
    this.attr('leftbarHidden', !this.attr('leftbarHidden'));
  },
  currentPage(page){
    return can.route.attr('page') === page;
  },
  currentLeftSidebar(sidebar){
    return can.route.attr('leftSidebar') === sidebar;
  },
  currentServer(server){
    return can.route.attr('server') === server;
  }
});

route(':page', { page: 'dashboard' });

/* * * Auth * * */
can.route('passwordemail/:email',{page: 'passwordemail'});
can.route('passwordchange/:secret',{page: 'passwordchange'});
can.route('verify/:secret',{page: 'verify'});
// can.route(':page',{page: 'overview'});


/* * * Overview * * */
// can.route('', {'page':'dashboard'});
can.route('settings', {'page':'settings'});
can.route('help', {'page':'help'});

can.route('server/:server', {'page':'server'});

can.route('server/:server/:db_name', {'page':'database'});
can.route('server/:server/:db_name/addCollection', {'page':'database', addCollection:true});

can.route('server/:server/:db_name/:coll_name', {'page':'collection'});
can.route('server/:server/:db_name/:coll_name/:doc_id', {'page':'document'});



export default AppViewModel;
