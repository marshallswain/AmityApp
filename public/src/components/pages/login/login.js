import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './login.less!';
import template from './login.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-login component'
    }
  }
});

export default Component.extend({
  tag: 'page-login',
  viewModel: ViewModel,
  template
});