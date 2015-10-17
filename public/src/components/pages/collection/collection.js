import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './collection.less!';
import template from './collection.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-collection component'
    }
  }
});

export default Component.extend({
  tag: 'page-collection',
  viewModel: ViewModel,
  template
});