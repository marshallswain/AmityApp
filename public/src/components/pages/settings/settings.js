import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './settings.less!';
import template from './settings.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-settings component'
    }
  }
});

export default Component.extend({
  tag: 'page-settings',
  viewModel: ViewModel,
  template
});