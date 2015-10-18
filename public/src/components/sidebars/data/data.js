import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './data.less!';
import template from './data.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the data-sidebar component'
    }
  }
});

export default Component.extend({
  tag: 'data-sidebar',
  viewModel: ViewModel,
  template
});