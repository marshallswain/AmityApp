import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './users.less!';
import template from './users.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the users-sidebar component'
    }
  }
});

export default Component.extend({
  tag: 'users-sidebar',
  viewModel: ViewModel,
  template
});