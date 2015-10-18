import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './about.less!';
import template from './about.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-about component'
    }
  }
});

export default Component.extend({
  tag: 'page-about',
  viewModel: ViewModel,
  template
});