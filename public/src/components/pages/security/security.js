import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './security.less!';
import template from './security.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-security component'
    }
  }
});

export default Component.extend({
  tag: 'page-security',
  viewModel: ViewModel,
  template
});