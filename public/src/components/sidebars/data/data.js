import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './data.less!';
import template from './data.stache!';

export const ViewModel = Map.extend({
  define: {
  }
});

export default Component.extend({
  tag: 'data-sidebar',
  viewModel: ViewModel,
  template
});