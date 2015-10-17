import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './server.less!';
import template from './server.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-server component'
    }
  }
});

export default Component.extend({
  tag: 'page-server',
  viewModel: ViewModel,
  template
});