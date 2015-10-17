import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './error.less!';
import template from './error.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-error component'
    }
  }
});

export default Component.extend({
  tag: 'page-error',
  viewModel: ViewModel,
  template
});