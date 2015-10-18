import AppMap from 'can-ssr/app-map';
import route from 'can/route/';
import 'can/map/define/';
import 'can/route/pushstate/';
import 'bootstrap';

const AppViewModel = AppMap.extend({
  define: {
    title: {
      value: 'AmityDB',
      serialize: false
    },
    leftbarHidden: {
      value: false,
      serialize: false
    },
    user: {
      value(){
        return {
          email: 'marshall@creativeideal.net',
        }
      },
      serialize: false
    }
  },
  toggleLeftbar(){
    this.attr('leftbarHidden', !this.attr('leftbarHidden'));
  },
  currentPage(page){
    return can.route.attr('page') === page;
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

can.route(':hostname', {'page':'server'});

can.route(':hostname/:db_name', {'page':'database'});
can.route(':hostname/:db_name/addCollection', {'page':'database', addCollection:true});

can.route(':hostname/:db_name/:coll_name', {'page':'collection'});
can.route(':hostname/:db_name/:coll_name/:doc_id', {'page':'document'});



export default AppViewModel;
