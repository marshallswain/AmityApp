import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './left-sidebar.less!';
import template from './left-sidebar.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the left-sidebar component'
    }
  }
});

export default Component.extend({
  tag: 'left-sidebar',
  viewModel: ViewModel,
  template
});