import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './right-sidebar.less!';
import template from './right-sidebar.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the right-sidebar component'
    }
  }
});

export default Component.extend({
  tag: 'right-sidebar',
  viewModel: ViewModel,
  template
});