import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './logout.less!';
import template from './logout.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-logout component'
    }
  }
});

export default Component.extend({
  tag: 'page-logout',
  viewModel: ViewModel,
  template
});