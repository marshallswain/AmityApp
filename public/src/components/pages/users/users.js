import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './users.less!';
import template from './users.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-users component'
    }
  }
});

export default Component.extend({
  tag: 'page-users',
  viewModel: ViewModel,
  template
});