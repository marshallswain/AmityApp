import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './dashboard.less!';
import template from './dashboard.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-dashboard component'
    }
  }
});

export default Component.extend({
  tag: 'page-dashboard',
  viewModel: ViewModel,
  template
});