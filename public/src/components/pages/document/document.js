import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './document.less!';
import template from './document.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-document component'
    }
  }
});

export default Component.extend({
  tag: 'page-document',
  viewModel: ViewModel,
  template
});